#pragma strict

static var health: int;
var health3 : Texture;
var xpos:float;
var ypos:float;
	
xpos = Camera.main.transform.position.x+0;
ypos = -3.7;


function OnBecameInvisible()
{
	Destroy(this.gameObject);
}


function Update () {

}