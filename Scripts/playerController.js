#pragma strict
var playerspeed:int;
var isgrounded : boolean;
private var anim:Animator;
static var lives: int;
static var score: int=0;
var textStyle:GUISkin;
var powerTimer: float = 0;
var powerTimerBool: boolean;
var life1 : Texture;
var life2 : Texture;
var life3 : Texture;
var life4 : Texture;
var rock: Rigidbody; 
var cone: Rigidbody;
var star: Rigidbody;
var xposition:float;
var yposition:float;
var explosion: Rigidbody;
var woosh: AudioSource; 
var jump: AudioSource;
var explode: AudioSource;
var powerup: AudioSource;
var rocket:AudioSource;
var ouchSource: AudioSource;
static var ouch: AudioSource;
static var explosionSound: AudioSource;
var wep1: Rigidbody;
var wep2: Rigidbody;
var weapon1 : boolean;
var weapon2 : boolean;

function Start () {

 isgrounded = false;
 anim = GetComponent(Animator);
 lives = 3;
 powerTimerBool = false;
 ouch = ouchSource;
 explosionSound = explode;
}

function Update () {
var xpos:float;
var ypos:float;
	
transform.position.x = transform.parent.position.x-5;

Debug.Log(isgrounded); 
	
	if(isgrounded == true)
    {
      if (Input.GetKeyDown(KeyCode.UpArrow))
      	{
			Debug.Log("Jump");
			rigidbody.AddForce(Vector3(0,400,0));
			anim.SetInteger("Jump",1);
			jump.Play();
		}
		
			anim.SetInteger("Jump",0);
		
		
		   /*if (Input.GetKeyDown(KeyCode.DownArrow))
      	{
			//GetComponent(CharacterController);
			//transform.localScale.y = 0.05; 
			anim.SetInteger("Crouch",1);
			gameObject.GetComponent(BoxCollider).transform.localScale.y = 0.2;
		}
		
		
			anim.SetInteger("Crouch",0);
			gameObject.GetComponent(BoxCollider).transform.localScale.y = 0.3; */
	
		   if (Input.GetKeyDown(KeyCode.Space))
      	{
      	
      			xpos = Camera.main.transform.position.x-5;
				ypos = -3.7;
				 Instantiate(rock,Vector3(xpos,ypos,19),Quaternion.identity);
				 woosh.Play();
		}
		
				   if (Input.GetKeyDown(KeyCode.LeftShift))
      	{
      	
      			xpos = Camera.main.transform.position.x-5;
				ypos = -3.7;
				 Instantiate(cone,Vector3(xpos,ypos,19),Quaternion.identity);
				 woosh.Play();
		}
		
		   if (Input.GetKeyDown(KeyCode.A))
      	{
      	
      			xpos = Camera.main.transform.position.x-5;
				ypos = -3.7;
				 Instantiate(star,Vector3(xpos,ypos,19),Quaternion.identity);
				 woosh.Play();
		}
		
		 if(Input.GetKeyDown(KeyCode.LeftAlt))
		 {
		 		weapon1 = true;	
		 		xpos = Camera.main.transform.position.x-5;
				ypos = -3.7;
		 	Instantiate(wep1,Vector3(xpos,ypos,19),Quaternion.identity);
		 	woosh.Play();
		 }
		 
		 	 if(Input.GetKeyDown(KeyCode.RightAlt))
		 {
		 		weapon2= true;	 	
		 		xpos = Camera.main.transform.position.x-5;
				ypos = -3.7;
		 	Instantiate(wep2,Vector3(xpos,ypos,19),Quaternion.identity);
		 	woosh.Play();
		 }
		 
		}
		}
	
	
	
	//make sure u replace "floor" with your gameobject name.on which player is standing
function OnCollisionEnter(theCollision : Collision){
Debug.Log("Collided");
    if(theCollision.gameObject.tag == "floor")
    {
        isgrounded = true;
    }
    
    if(theCollision.gameObject.tag == "powerUp")
    {

		powerup.Play();
    	Destroy(theCollision.gameObject);
    	powerTimerBool = true;	
    	score+=5; //increase score with powerup
    	
    	/*powerTimer += Time.deltaTime;
		if (powerTimer==5)
		{
			powerTimer=0;
		}
		
		if(powerTimer>0 || powerTimer==5)
		{
			
		}*/
    }
    
    if(theCollision.gameObject.tag == "alien")
    {
    	ouch.Play();
    	lives --;
    	Destroy(theCollision.gameObject);
    }
    
    if(theCollision.gameObject.tag == "alien2")
    {
    	ouch.Play();
    	lives --;
    	Destroy(theCollision.gameObject);
    }
    
    if(theCollision.gameObject.tag == "alien3")
    {
    	ouch.Play();
    	lives --;
    	Destroy(theCollision.gameObject);
    }
    
        if(theCollision.gameObject.tag == "bomb")
    {
    	//Instantiate(explosion,transform.position, transform.rotation);
    	ouch.Play();
    	explode.Play();
    	score --;
    	lives --;
    	Destroy(theCollision.gameObject);
   
    }
    
        
        if(theCollision.gameObject.tag == "obstacle")
    {
    	ouch.Play();
    	score --;
    	lives --;
    	Destroy(theCollision.gameObject);
    }
    
     if(theCollision.gameObject.tag == "ChickPowerUp")
    {
    	if(lives<4)
    	{
    		lives++;
    		powerup.Play();
    	}	
    Destroy(theCollision.gameObject);
    }
    
      if(theCollision.gameObject.tag == "planetPowerUp")
    {
    	Timer3.timer +=10;
    Destroy(theCollision.gameObject);
    powerup.Play();
    }
        
        if(theCollision.gameObject.tag == "rocket")
    {
    	ouch.Play();
       	explode.Play();
    	lives --;
    	Destroy(theCollision.gameObject);
    	Instantiate(explosion,transform.position, transform.rotation);
 
    }
    
  	 if(theCollision.gameObject.tag == "boss")
    {
    	lives =0;
   	}
   	
   	
    
}
 
//consider when character is jumping .. it will exit collision.
function OnCollisionExit(theCollision : Collision){
    if(theCollision.gameObject.tag == "floor")
    {
        isgrounded = false;
    }
    
    
    
    
  }
    
    function OnGUI() 
		{
		GUI.skin = textStyle;
		var myStyle : GUIStyle = new GUIStyle();
		myStyle.fontSize = 50;
		myStyle.normal.textColor = Color.white;
		
		var powerStyle : GUIStyle = new GUIStyle();
		powerStyle.fontSize = 70;
		powerStyle.normal.textColor = Color.red;
		
		//parameters: x, y, width, height
		GUI.Label(Rect(300,5,150,50), "Score: " +score, myStyle);
		
		if(lives==1)
		{
			GUI.DrawTexture(Rect(20,10,150,40), life1);
		}
		
		else if(lives==2)
		{
			GUI.DrawTexture(Rect(20,10,150,40), life2);
		}
		
		else if(lives==3)
		{
			GUI.DrawTexture(Rect(20,10,150,40), life3);
		}
		
		else if(lives==4)
		{
			GUI.DrawTexture(Rect(20,10,200,40), life4);
		}
		
		else if(lives==0)
		{
			Application.LoadLevel(0);
		}
				
		if(powerTimerBool ==true)
		{
			GUI.Label(Rect(120,80,200,80), "POWERUP !! SCORE + 5", powerStyle);
		}
		
}
