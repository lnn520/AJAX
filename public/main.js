let n = 1
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange =()=>{
        if(request.readyState === 4 && request.status === 200)
        {
            console.log(request.response)
            const array =JSON.parse(request.response)
            array.forEach(item=>{
                const li =document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n +=1
        }
    };
    request.send()
} 

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json');
    request.onreadystatechange =() =>{
        if(request.readyState ===4 && request.status===200){
              console.log(request.response)
          const object =  JSON.parse(request.response)
          const myName = document.querySelector("#myName")
          myName.textContent = object.name
        }
      
    }
    request.send()
}

getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status===200)
        {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())

        }   
    };
    request.send();
};

getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','./3.html')
    request.onload=()=>{
        console.log(request.response);
        const HTML =document.createElement('html')
        HTML.innerHTML = request.response
        document.body.appendChild(HTML)
    }
    request.onerror = ()=>{}
    request.send()
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = ()=>{
        console.log(request.response)
        const script = document.createElement('script')
        script .innerHTML = request.response
        document.body.appendChild(script)

    }
    request.onerror = ()=>{

    }
    request.send();
} 

getCSS.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('get','/style.css');
     request.onreadystatechange =()=>{
    if(request.readyState === 4){//下载完成，但是不知道是成功还是失败
        if(request.status >= 200 && request.status <300)//状态码
        {
            //船舰style标签
    const style = document.createElement('style')
    //填写style内容
    style.innerHTML = request.response
    //插到头里  
    document.head.appendChild(style)
        } else{
             alert('css加载失败了')
        }
    }
}
request.send()
}
