#pragma strict
var explosion: Rigidbody;

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

//controls the speed of the enemy darts
var speedOfDart:int;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Player")
	{
		playerController.ouch.Play();
		playerController.explosionSound.Play();
		//decrease player lives
		playerController.lives--;	
		Instantiate(explosion,transform.position, transform.rotation);
		Destroy(this.gameObject);
	
	}
}



function Update () {
	//enemy dart moves left
	transform.Translate(Vector3.left * speedOfDart * Time.deltaTime);
}