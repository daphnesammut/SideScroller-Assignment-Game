#pragma strict
var dart:Rigidbody;

function shootDart()
{
	//shoot the dart
	Instantiate(dart,transform.position,Quaternion.identity);
}



function Start () {
	
 	//aliens will shoot half a second after they spawn and every 10 sec after
 	InvokeRepeating("shootDart",0.5,10.0);
}


function Update () {

}