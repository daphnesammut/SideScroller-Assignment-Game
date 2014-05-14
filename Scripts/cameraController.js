#pragma strict
var cameraspeed:int;
var acceleration: float;


function Start () {
	cameraspeed=1;
}

function Update () {

	  if (Input.GetKey(KeyCode.RightArrow))
      	{
			cameraspeed+=acceleration;	
		}
		
	else
	{
		cameraspeed = 1;
	}
		
	//this script moves the camera forward at a set speed. 
	transform.Translate(Vector3.right * cameraspeed * Time.deltaTime);
	

}