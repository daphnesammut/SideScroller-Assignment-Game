#pragma strict
var textStyle:GUISkin;

function Start () {

}

function Update () {


}

function OnGUI() 
		{
		GUI.skin = textStyle;
		var myStyle : GUIStyle = new GUIStyle();
		myStyle.fontSize = 50;
		myStyle.normal.textColor = Color.blue;
		
		//parameters: x, y, width, height
		GUI.Label(Rect(450,10,150,50), "HighScore: " +playerController.score, myStyle);
		}
		