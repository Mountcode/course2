window.onload = function(e){
    
    
    new modal()
    
   
    
    
    
}


function modal(){
    var modalSummoner = document.querySelectorAll('.openmodal');
    var flag = this;
    
    for (var i = 0; i < modalSummoner.length; i++){
        modalSummoner[i].onclick = function(e){ 
            var currentModal =  this.getAttribute('href');
            flag.open(currentModal);
            
            e.preventDefault();
        }; 
    }
    
    this.open = function(param){
        
        var modalForShow = document.querySelector(param).cloneNode(true),
            modalWrapper = document.createElement("div"),
            modalOverhide = document.createElement("div")
        
        modalWrapper.classList.add('modalWrapper');
        modalOverhide.classList.add('modalOverhide');
        
        document.body.appendChild(modalOverhide);
        modalOverhide.appendChild(modalWrapper);
        modalWrapper.appendChild(modalForShow);
        
        flag.close(modalOverhide)
    }
    
    this.close = function(closer){
        closer.onclick = function(e){ 
            this.remove();   
        }
    }
}

























