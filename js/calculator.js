/* Author: Richard Myatt
   Date: 1 March 2018

   A styled version of the simple calculator
*/

// keypad button designations
var keyDesignations = ["(", ")", "AC", "CE",
                       "7", "8", "9", "/",
                       "4", "5", "6", "*",
                       "1", "2", "3", "-",
                       "0", ".", "=", "+"];

new Vue({
  el: "#app",
  data: {
    clr: true,
    str: "",
    res: "",
    keys: keyDesignations
  },
  methods: {
    handleKey: function(i) {      /* method to handle key press */
      if(this.keys[i] === "AC") {
        this.str = "";
        this.res = "";
        this.clr = true;
      } else if(this.keys[i] === "CE") {
        if(this.clr === true) {
          this.str = this.str.slice(0, -1);
        }
      } else if(this.keys[i] === "=") {
        try {
          var result = Math.round(eval(this.str) * 100) / 100;
          if(result < 99999999999) {
            this.res = result;
          } else {
            this.res = "Error";
            this.clr = false;
          }
        }
        catch(err) {
          this.res = "Error";
        }
        this.clr = false;
      } else {
        if(this.clr === true) {
          if(this.str.length < 19) {
            this.str += this.keys[i];
          } else {
            this.res = "Error";
            this.clr = false;
          }
        }
      }
    }
  }
});
