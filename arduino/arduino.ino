int num_Measure = 128 ; // Set the number of measurements   
int pinSignal = A0; // pin connected to pin O module sound sensor  
long sum = 0 ; // Store the total value of n measurements   
long soundLevel = 0 ; // Store the average value
int soglieArray[5] = {60, 70, 75, 80, 90};
int tempiArray[5] = {20, 30, 40, 25, 15}; 
const int motorPin  = 9;  


int level = 0;
int counter = 0;
 
void setup ()  
{   
  pinMode (pinSignal, INPUT);  // Set the signal pin as input 
  pinMode (motorPin, OUTPUT); // Set the output motor   
  Serial.begin (9600);
}  
   
void loop () {
  digitalWrite (motorPin, LOW);
  if (level < 5) {
    readSensor();
    checkLimit();
    delay(10);
  }
}

void readSensor () {
  // Performs 128 signal readings   
  for ( int i = 0 ; i < num_Measure; i++) {  
    long soundSignal = analogRead (pinSignal);
    int mappedSignal = map(soundSignal, 0, 1023, 0, 100);
    sum = sum + mappedSignal;  
  }  
 
  soundLevel = sum / num_Measure; // Calculate the average value  
  Serial.print("Sound Volume: ");
  Serial.println (soundLevel); 
  
  if(soundLevel < soglieArray[level]) {
    Serial.println("Suono non abbastanza alto");
    counter = 0;
  }
  else {
    Serial.println("Soglia superata");
    counter += 1;
    Serial.print("Tempo passato: ");
    Serial.println (counter);
  }
  sum = 0; // Reset the sum of the measurement values 
}

void checkLimit () {
  if (counter > tempiArray[level]) {
    Serial.println("Soglia superata per troppo tempo");
    gonfiaPompa();
    counter = 0;
    level += 1;
    
    if (level < 5) {
      Serial.print("Nuovo livello: ");
      Serial.println (level+1);
    } else {
      Serial.println("Livello massimo raggiunto");
    }
  }
}

void gonfiaPompa() {
   digitalWrite(motorPin, HIGH);
  Serial.println("gonfia");
  delay(5000);
   digitalWrite(motorPin, LOW);
}
