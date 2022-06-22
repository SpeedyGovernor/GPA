var a_score = 0.0;
var b_score = 0.0;
var c_score = 0.0;
var d_score = 0.0;
var gpa = 0.0;

function myfunction(){
					
					var la_1 = document.getElementById("la1").value ;
					switch (la_1)
						{
						case "A": a_score = a_score+1;break;
						case "B": b_score = b_score+1;break;
						case "C": c_score = c_score+1;break;
						case "D": d_score = d_score+1;break;
						default: alert("wrong value")
						}
						
						
					var lit_1 = document.getElementById("lit").value ;
					
					switch (lit_1)
						{
						case "A": a_score = a_score+1;break;
						case "B": b_score = b_score+1;break;
						case "C": c_score = c_score+1;break;
						case "D": d_score = d_score+1;break;
						default: alert("wrong value")
						}
						
						
					var science_1 = document.getElementById("science").value ;
					
					switch (science_1)
						{
						case "A": a_score = a_score+1;break;
						case "B": b_score = b_score+1;break;
						case "C": b_score = c_score+1;break;
						case "D": b_score = d_score+1;break;
						default: alert("wrong value")
						}
							
							
					var math_1 = document.getElementById("math1").value ;
					
					switch (math_1)
						{
						case "A": a_score = a_score+1;break;
						case "B": b_score = b_score+1;break;
						case "C": b_score = c_score+1;break;
						case "D": b_score = d_score+1;break;
						default: alert("wrong value")
						}
								
						
					var history_1 = document.getElementById("history").value ;
					
					switch (history_1)
						{
						case "A": a_score = a_score+1;break;
						case "B": b_score = b_score+1;break;
						case "C": b_score = c_score+1;break;
						case "D": b_score = d_score+1;break;
						default: alert("wrong value")
						}
								
							
						
					var spanish_1 = document.getElementById("spanish").value ;
					
					switch (spanish_1)
						{
						case "A": a_score = a_score+1;break;
						case "B": b_score = b_score+1;break;
						case "C": b_score = c_score+1;break;
						case "D": b_score = d_score+1;break;
						default: alert("wrong value")
						}
								
								
					var el1_1 = document.getElementById("el1").value ;
					
					switch (el1_1)
						{
						case "A": a_score = a_score+1;break;
						case "B": b_score = b_score+1;break;
						case "C": b_score = c_score+1;break;
						case "D": b_score = d_score+1;break;
						default: alert("wrong value")
						}
							

					var el2_1 = document.getElementById("el2").value ;
					
					switch (el2_1)
						{
						case "A": a_score = a_score+1;break;
						case "B": b_score = b_score+1;break;
						case "C": b_score = c_score+1;break;
						case "D": b_score = d_score+1;break;
						default: alert("wrong value")
						}
				
  gpa = ((a_score * 4)+ (b_score * 3)+ (c_score* 2)+ (d_score *1)) /8 ;	
  document.getElementById("total_gpa").innerHTML = gpa;	
    
  

}
