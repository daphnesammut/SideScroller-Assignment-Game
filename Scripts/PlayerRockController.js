#pragma strict

var rockSpeed: int;

function Start () {

}

//function that is triggered when the rock hits the enemy
function OnTriggerEnter(other:Collider)
{
	//if the rock hits the alien, we will do the following two things:
	//Destroy the rock
	//Destroy the alien
	if(other.gameObject.tag == "alien")
	{
		//increase the Score
		playerController.score++;
		
		var remainder = 0;
		
		//calculate the remainer of division by ten
		remainder = playerController.score % 10;
		
		//if the remainder is 0, the score can be divided by 10
		if (remainder == 0)
		{
			//increase lives by ten
			playerController.lives++;
		}
		//Destroy the alien
		Destroy(other.gameObject);
		//Destroy the rock
		Destroy(this.gameObject); 
	}
	
	if(other.gameObject.tag == "bomb")
	{	
		playerController.explosionSound.Play();
		//increase the Score
		playerController.score++;
		
		var remainder2 = 0;
		
		//calculate the remainer of division by ten
		remainder2 = playerController.score % 10;
		
		//if the remainder is 0, the score can be divided by 10
		if (remainder2 == 0)
		{
			//increase lives by ten
			playerController.lives++;
		}
		//Destroy the alien
		Destroy(other.gameObject);
		//Destroy the rock
		Destroy(this.gameObject); 
	}
	
		if(other.gameObject.tag == "rocket")
	{	
		playerController.explosionSound.Play();
		//increase the Score
		playerController.score++;
		
		var remainder5 = 0;
		
		//calculate the remainer of division by ten
		remainder5 = playerController.score % 10;
		
		//if the remainder is 0, the score can be divided by 10
		if (remainder5 == 0)
		{
			//increase lives by ten
			playerController.lives++;
		}
		//Destroy the alien
		Destroy(other.gameObject);
		//Destroy the rock
		Destroy(this.gameObject); 
	}
	
	if(other.gameObject.tag == "boss")
	{	
		//increase the Score
		playerController.score++;
		
		var remainder6 = 0;
		
		//calculate the remainer of division by ten
		remainder6 = playerController.score % 10;
		
		//if the remainder is 0, the score can be divided by 10
		if (remainder6 == 0)
		{
			//increase lives by ten
			playerController.lives++;
		}
		//Destroy the alien
		BossGeneratorScript.lives--;
		
		if (BossGeneratorScript.lives == 0)
		{
			Destroy(other.gameObject);
		}
		//Destroy the rock
		Destroy(this.gameObject); 
	}
	
	if(other.gameObject.tag == "alien2")
	{
		//increase the Score
		playerController.score++;
		
		var remainder3 = 0;
		
		//calculate the remainer of division by ten
		remainder3 = playerController.score % 10;
		
		//if the remainder is 0, the score can be divided by 10
		if (remainder3 == 0)
		{
			//increase lives by ten
			playerController.lives++;
		}
		//Destroy the alien
		Destroy(other.gameObject);
		//Destroy the rock
		Destroy(this.gameObject); 
	}
	
if(other.gameObject.tag == "alien3")
	{
		//increase the Score
		playerController.score++;
		
		var remainder4 = 0;
		
		//calculate the remainer of division by ten
		remainder4 = playerController.score % 10;
		
		//if the remainder is 0, the score can be divided by 10
		if (remainder4 == 0)
		{
			//increase lives by ten
			playerController.lives++;
		}
		//Destroy the alien
		Destroy(other.gameObject);
		//Destroy the cone
		Destroy(this.gameObject); 
	}
	
}
function OnBecameInvisible()
{
    Destroy(this.gameObject);
}

	function Update () {
    //the enemy laser shooting towards the spaceship
    transform.Translate(Vector3.right * rockSpeed * Time.deltaTime);
 
}
