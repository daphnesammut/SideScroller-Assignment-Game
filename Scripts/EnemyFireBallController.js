#pragma strict
var explosion:Rigidbody;
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

//controls the speed of the enemy fireball
var speedOfFireBall:int;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Player")
	{
		playerController.ouch.Play();
		playerController.explosionSound.Play();
		//decrease player lives
		playerController.lives--;	
		
		Destroy(this.gameObject);
		Instantiate(explosion,transform.position, transform.rotation);
	
	}
}


function Update () {
	//enemy fireball moves left
	transform.Translate(Vector3.left * speedOfFireBall * Time.deltaTime);
}