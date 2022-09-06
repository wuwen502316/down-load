var fn = function(){
    const pathname = location.pathname;
    if( pathname === "/Index/LiveStatus"){
        console.log(`${pathname}页面下用ctrol键`)
        var dialog = document.querySelectorAll("div[role='dialog']");
        if(dialog){
            for(index in dialog) {
                console.log(index)
                dialog[index].addEventListener("keydown",(e) => {
                    if(e.keyCode == 17){
                        var btns = document.querySelectorAll("button[disabled]");
                        for (let i = 0; i < btns.length; i++) {
                            // console.log(btns[i])
                            btns[i].removeAttribute("disabled");
                        }
                    }
                })
            }
        }else{
            return
        }
    }else if(pathname === "/Device/DistributieCar"){
        const car = document.querySelector(".ant-tabs-nav-scroll");
        car.onclick = function(){
            const searchBox = document.querySelector(".ant-input-search.ant-input-affix-wrapper>input");
            const val = searchBox.value.trim();
            const ul = document.querySelector(".ant-tree.ant-tree-icon-hide");
            const li = ul.querySelectorAll(".ant-tree-treenode-switcher-open");
            for(let i = 0; i < li.length; i++){
                const flag = li[i].querySelector("span>span>span>span").innerHTML.includes("工厂测试");
                if(flag){
                    const _li = li[i].querySelectorAll("ul>li");
                    // const res = li[i].querySelector("li .ant-tree-title>span>span").innerHTML.includes(val);
                    for(let j = 0; j < _li.length; j++){
                        const valFlag = _li[j].querySelector(".ant-tree-title>span>span").innerHTML.includes(val);
                        if(valFlag){
                            var _style = _li[j].style;
                            _style.position = "fixed";
                            _style.top = "150px";
                            _style.fontSize = '50px';
                        }
                    }
                }
            }
        }
    }else if(pathname === '/Device/UpdateFile'){
        const c = document.querySelector(".ant-tabs-nav-scroll");
        c.onclick = function(){
            const val = document.querySelector("input[placeholder='请输入要检索的关键字']").value.trim();
            const uls = document.querySelectorAll("ul[data-expanded='true']");
            for(let element of uls){
                if(!element.querySelector("ul")){
                    const lis = element.querySelectorAll("li");
                    for(let i of lis){
                        const length = i.children.length;
                        if(i.children[length-1].innerHTML.includes(val)){
                            element.style.position = 'aboslute';
                            i.style.position = "fixed";
                            i.style.top = '200px';
                        }
                    }
                }
            }
        }
    }
}


localStorage.setItem("searchFunction",fn);

eval(`(${localStorage.getItem('searchFunction')})()`)