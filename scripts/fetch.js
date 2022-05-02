
let getData= async (url)=>{

    let res= await fetch(url);

    let data= await res.json();

    return data;
}


let append = (data,results)=>{

    console.log(data);

    results.innerHTML=null;

    let show_results=document.getElementById("results")

    data.articles.forEach(({title,description,urlToImage})=>{

        let div= document.createElement("div");
        div.setAttribute("class","news");

        let img= document.createElement("img");
        img.src=urlToImage;

        let div2=document.createElement("div");


        let tit=document.createElement("h3");
        tit.innerText=title;

        let des= document.createElement("p");
        des.innerText=description;

        div2.append(tit,des)

        div.append(img,div2);
        show_results.append(div);

    })
}




export {getData,append};