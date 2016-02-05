;(function ShowHide() {
 		document.getElementById("abc").onclick = function() {
 		document.getElementById("abc").classList.toggle("after");
 		document.getElementById("abc").style.background = "#e02222";
 			if (document.getElementById("a").style.display != "block") {
 				document.getElementById("a").style.display = "block";
 			}
 			else if (document.getElementById("a").style.display = "none") {
 				document.getElementById("abc").style.background = "#3d3d3d";
 			}			

 		}
 	})();