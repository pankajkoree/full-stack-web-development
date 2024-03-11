/* 
getArticlesData(20, (articles) => {  
    console.log("article lists", articles);  
    getUserData(article.username, (name) => {  
      console.log(name);  
      getAddress(name, (item) => {  
        console.log(item);  
        //This goes on and on...  
      }  
  })  

*/

asyncOperation1(param1, function(err, result1) {
    if (err) {
        handleError(err);
    } else {
        asyncOperation2(result1, function(err, result2) {
            if (err) {
                handleError(err);
            } else {
                asyncOperation3(result2, function(err, result3) {
                    if (err) {
                        handleError(err);
                    } else {
                        // Do something with result3
                        document.getElementById("callback_hell").innerHTML = "Callback hell";
                    }
                });
            }
        });
    }
});
