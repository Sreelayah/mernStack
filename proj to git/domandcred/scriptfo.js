
    var prices=[];
    var items=[];
    let totalAmount=0;


    function addToCart(itemname,price){
      alert(itemname+" added to cart");
      prices.push(price);
      items.push(itemname);

      totalAmount=prices.reduce((added,num) => added+num,0) 

    }


    function showCart(){
      
      if(items.length==0){
        alert("your cart is empty")
        items.pop();
        prices.pop();
        items=[];
        prices=[];
      }else{
           var a=document.getElementById("div4cart");
           a.innerHTML=" ";

            var tble = document.createElement("table");
            a.appendChild(tble);
            tble.setAttribute("class", " container text-center text-light table-bordered");


        
            var row1 = document.createElement("tr");
            tble.appendChild(row1);

            var head1 = document.createElement("th");
            row1.appendChild(head1);
            head1.appendChild(document.createTextNode("Items"));

            var head2 = document.createElement("th");
            row1.appendChild(head2);
            head2.appendChild(document.createTextNode("Price"));

            var head3 = document.createElement("th");
            row1.appendChild(head3);

            var head4 = document.createElement("th");
            row1.appendChild(head4);

        
            



            var len=items.length;
              for(i=0;i<len;i++){

              // // Row 1
              
                var row2 = document.createElement("tr");
                tble.appendChild(row2);
                  
                var des1 = document.createElement("td");
                row2.appendChild(des1);
                des1.appendChild(document.createTextNode(items[i]));
  
                var des2 = document.createElement("td");
                row2.appendChild(des2);
                des2.appendChild(document.createTextNode(prices[i]));
                
                var des3 = document.createElement("td");
                row2.appendChild(des3);


                var btnn=document.createElement("button");
                btnn.textContent="remove from cart";
                btnn.setAttribute("class","btn btn-primary"); 
                btnn.addEventListener("click",removeElm)
                des3.appendChild(btnn);

                var br = document.createElement("br");
                row2.appendChild(br);
              


                var current=items[i];
                var price=prices[i];

              }
                              
              var des4 = document.createElement("td");
              row2.appendChild(des4);
                var btnn=document.createElement("button");
                btnn.textContent="pay";
                btnn.setAttribute("class","btn btn-primary"); 
                btnn.addEventListener("click",neMenu)
                row2.appendChild(btnn);




              function removeElm(){
                var tormv=items.indexOf(current);
                // alert(tormv);
                var tormv1=prices.indexOf(price);
                // alert(tormv1)

                // var nItem=[];
                // var nPrices=[];

                  items.splice(tormv, 1); // Remove item from `items`
                  prices.splice(tormv1, 1); // Remove price from `prices`


                // console.log(items);
                // console.log(prices);
                showCart();

              }

              function neMenu(){

                var chek=document.getElementById('pay1');
                if(chek){
                  var cntnt=chek.querySelector('h3');
                  var totalAmount = prices.reduce((added, num) => added + num, 0);
                  cntnt.textContent = "YOUR TOTAL IS :  " + totalAmount;
                  return;

                } 

                var d1=document.createElement("div");
                d1.setAttribute('id','pay1')
                a.appendChild(d1);

                var br = document.createElement("br");
                d1.appendChild(br);


                var cntnt=document.createElement("h3");
                cntnt.innerHTML="YOUR TOTAL IS :  "
                d1.appendChild(cntnt);


                totalAmount=prices.reduce((added,num) => added+num,0);
                cntnt.textContent+=totalAmount;

                button.addEventListener("click", function() {
                totalAmount = prices.reduce((added, num) => added + num, 0);                  cntnt.textContent = "YOUR TOTAL IS :  " + totalAmount;
              });


              }
              
      }


      
    }




