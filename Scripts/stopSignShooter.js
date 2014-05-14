#pragma strict
var stopSign:Rigidbody;

function shootStopSign()
{
	//shoot the taxi
	Instantiate(stopSign,transform.position,Quaternion.identity);
}

function Start () {
	//aliens will shoot half a second after they spawn and every 10 sec after
 	InvokeRepeating("shootStopSign",0.5,10.0);
}

function Update () {

}