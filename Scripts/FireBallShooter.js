#pragma strict
var fireball:Rigidbody;


function shootFireball()
{
	//shoot the fireball
	Instantiate(fireball,transform.position,Quaternion.identity);

}



function Start () {
	
 	//aliens will shoot half a second after they spawn and every 10 sec after
 	InvokeRepeating("shootFireball",0.5,10.0);
}


function Update () {

}