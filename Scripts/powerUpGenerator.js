#pragma strict

var powerup:GameObject;
var isgrounded : boolean;
var speed: float;

function createPowerUp()
{
	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+10;
	yposition = -2.4;
	
	//make it relative to the position of the current gameobject
	//xposition = transform.position.x + xposition;
	
	Instantiate(powerup,Vector3(xposition,yposition,19),Quaternion.identity);
}


function Start () {
	//wait for half a second, then repeat every second
	InvokeRepeating("createPowerUp",20.0,20.0);
}

function Update () {

}





