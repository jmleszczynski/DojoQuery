function $Dojo(id) {

    this.myId = document.getElementById(id);

    this.click = function (callback) {

        this.myId.addEventListener("click", callback);

        return this;

    };

    this.hover = function (hoverin, hoverout) {

        this.myId.addEventListener("mouseover", hoverin);
        this.myId.addEventListener("mouseout", hoverout);

        return this;
        
    };

}