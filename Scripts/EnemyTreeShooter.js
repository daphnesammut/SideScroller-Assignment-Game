#pragma strict
var tree:Rigidbody;

function shootTree()
{
	//shoot the tree
	Instantiate(tree,transform.position,Quaternion.identity);
}



function Start () {
	
 	//aliens will shoot half a second after they spawn and every 10 sec after
 	InvokeRepeating("shootTree",0.5,3.0);
}


function Update () {

}