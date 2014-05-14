#pragma strict
var alien:GameObject;
var isgrounded : boolean;
var alienSpawn:AudioSource;

//creates an instance of the alien at 
//a random position in x and y

function createAlien()
{ 

	var xposition:float;
	var yposition:float;
	
	xposition = Camera.main.transform.position.x+3;
	yposition = -3.7;
	
	//make it relative to the position of the current gameobject
	//xposition = transform.position.x + xposition;
	
	Instantiate(alien,Vector3(xposition,yposition,19),Quaternion.identity);
	alienSpawn.Play();
}


function Start () {
 //parameter 1: wait 4.0 seconds
 //parameter 2: every 4.0 seconds
 InvokeRepeating("createAlien",4.0,4.0);
}


function Update () {
transform.Translate(Vector3.left * 5 * Time.deltaTime);

}

 /*function OnGUI() 
		{	
			if(EnemyGeneratorScript.health ==3)
			{
				GUI.DrawTexture(Rect(210,10,150,40), health3);
			
			}

		}
*/

