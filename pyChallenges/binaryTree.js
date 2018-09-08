//Write a function that compares values
//The values come from the sum of the nodes values
//if the right side value > left side value return "Right"
//else if the right side value < left side value return "Left"
//else if right === left || nodevaluevariable === " "  then return ""

let treeNodes = [3, 6, 2, 9, -1, 10],
	treeNodeL1 = treeNodes[1], //6
    treeNodeL2 = treeNodes[3], //9
     
 	treeNodeR1 =  treeNodes[2], // 2 
    treeNodeR2= treeNodes[5]; //10
     
let right = (treeNodeR1+treeNodeR2);
let left = (treeNodeL1 + treeNodeL2);
if (treeNodes.length === 0 || right === left){
    console.log('I am an empty string'+' ')
} else if(right > left){
	console.log("Right")
} else {
	console.log("Left")
}