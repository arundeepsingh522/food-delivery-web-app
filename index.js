const result = (JSON.parse(localStorage.getItem('user')));
console.log('result',result);
if(result)
    {
        navigateToPage("./frontend/pages/home2.html");
    }
else{
   navigateToPage("./frontend/pages/home.html");
}