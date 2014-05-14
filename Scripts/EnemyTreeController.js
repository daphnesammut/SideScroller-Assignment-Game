#pragma strict
var explosion: Rigidbody;


function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

//controls the speed of the enemy tree
var speedOfTree:int;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Player")
	{
		//decrease player lives

		playerController.lives--;
		playerController.ouch.Play();
		if (playerController.lives==0)
		{
			Application.LoadLevel(0);
		}
		Instantiate(explosion,transform.position, transform.rotation);
		playerController.explosionSound.Play();
		Destroy(this.gameObject);
	
	}
}



function Update () {
	//enemy tree moves left
	transform.Translate(Vector3.left * speedOfTree* Time.deltaTime);
}