#pragma strict

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

//controls the speed of the enemy stopSign shoot
var speedOfStopSign:int;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Player")
	{
		playerController.ouch.Play();
		//decrease player lives
		playerController.lives--;	
		
		Destroy(this.gameObject);
	
	}
}


function Update () {
	//enemy stopSign moves left
	transform.Translate(Vector3.left * speedOfStopSign * Time.deltaTime);
}