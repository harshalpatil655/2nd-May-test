// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


document.getElementById("in").addEventListener("click",()=>{
    main();
});

import { getData,append } from "./fetch.js";

let main= ()=>{

    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in";

    let news_show=document.getElementById("results");

    getData(url).then((res)=>{
        append(res,news_show)
    });
}



document.getElementById("ch").addEventListener("click",()=>{
    main1();
});



let main1= ()=>{

    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch";

    let news_show=document.getElementById("results");

    getData(url).then((res)=>{
        append(res,results)
    });
}


document.getElementById("us").addEventListener("click",()=>{
    main2();
});


let main2= ()=>{

    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=us";

    let news_show=document.getElementById("results");

    getData(url).then((res)=>{
        append(res,results)
    });
}

document.getElementById("uk").addEventListener("click",()=>{
    main3();
});



let main3= ()=>{

    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk";

    let news_show=document.getElementById("results");

    getData(url).then((res)=>{
        append(res,results)
    });
}


document.getElementById("nz").addEventListener("click",()=>{
    main4();
});



let main4= ()=>{

    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz";

    let news_show=document.getElementById("results");

    getData(url).then((res)=>{
        append(res,results)
    });
}




document.getElementById("search_input").addEventListener("input",()=>{
    debounce(hulk,1000)
})




let hulk =()=>{

   

    let query= document.getElementById("search_input").value;
    
    console.log(query)

       
        window.location.href="../search.html"
        let url= `https://masai-mock-api.herokuapp.com/news?q=${query}`;
        let results=document.getElementById("results");
    
        getData(url).then((res)=>{
            append(res,results);
    
        })

        

        
}


let id;
let debounce= (func,delay)=>{

    if(id){
        clearTimeout(id);
    }
    id=setTimeout(()=>{
        func();
    },delay)
}



