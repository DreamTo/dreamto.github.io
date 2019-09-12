let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/firefox2.png');
    }else{
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }

}

// 这里 设置个性化欢迎信息
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
  }
  

  function setUserName() {
    //  这里会弹出一个 对话框 
    let myName = prompt('请输入你的名字');
    // 创建 name 数据项，并把myName变量复制给它
    localStorage.setItem('name', myName);
    // 调用函数，传递参数值
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
    //如果 存在参数，就直接调用 设置页面的函数
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  //这里是没有 括号的，加了反而错了
  myButton.onclick = setUserName;