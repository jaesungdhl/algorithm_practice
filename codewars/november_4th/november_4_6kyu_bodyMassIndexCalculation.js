For long period JavaScript warriors trained a lot in coding kata. But to find way warrior also need physical kata. Some of warriors forgot about this fact and enemies can use this weakness, your clan is under threat. You are chosen to fix this situation. Write a function to calculate Body mass index for each warrior.

bmi = weght(kg)/(height(m)*height(m))

Warriors know only their height in centimetres and weight (in kilogrames). Your task is to return an object with fields

value - calculated Body mass index, rounded with one number after decimal point.

category - from https://en.wikipedia.org/wiki/Body_mass_index

Ex :

calculateBmi(65,175)
Returns :

{value: "21.2", category: "Normal (healthy weight)"}
Capture

Note : as per standard conventions how you read the table is for example :

Normal is BMI < 25 and not Underweight
Hurry up, save your clan

function calculateBmi(weight, height) {
    let bmi = weight / ((height/100) * (height/100));
    let bmiProfile = {value: bmi.toFixed(1), category: null};
    if(bmi < 15) bmiProfile.category = "Very severely underweight";
    else if(bmi >= 15 && bmi < 16) bmiProfile.category = "Severely underweight";
    else if(bmi >= 16 && bmi < 18.5) bmiProfile.category = "Underweight";
    else if(bmi >= 18.5 && bmi < 25) bmiProfile.category = "Normal (healthy weight)";
    else if(bmi >= 25 && bmi < 30) bmiProfile.category = "Overweight";
    else if(bmi >= 30 && bmi < 35) bmiProfile.category = "Obese Class I (Moderately obese)";
    else if(bmi >= 35 && bmi < 40) bmiProfile.category = "Obese Class II (Severely obese)";
    else if(bmi >= 40 && bmi < 45) bmiProfile.category = "Obese Class III (Very severely obese)";
    else if(bmi >= 45 && bmi < 50) bmiProfile.category = "Obese Class IV (Morbidly Obese)";
    else if(bmi >= 50 && bmi < 60) bmiProfile.category = "Obese Class V (Super Obese)";
    else bmiProfile.category = "Obese Class VI (Hyper Obese)";
    return bmiProfile;
  }

  function calculateBmi(w, h) {
    let v = Math.round((w/(h/100)**2)*10)/10;
    return {value: v.toFixed(1), category: (v <= 15) ? "Very severely underweight" : (v > 15 && v <= 16) ? "Severely underweight" : (v > 16 && v <= 18.5) ? "Underweight" : (v > 18.5 && v <= 25) ? "Normal (healthy weight)" : (v > 25 && v <= 30) ? "Overweight" : (v > 30 && v <= 35) ? "Obese Class I (Moderately obese)" : (v > 35 && v <= 40) ? "Obese Class II (Severely obese)" : (v > 40 && v <= 45) ? "Obese Class III (Very severely obese)" : (v > 45 && v <= 50) ? "Obese Class IV (Morbidly Obese)" : (v > 50 && v <= 60) ? "Obese Class V (Super Obese)" : "Obese Class VI (Hyper Obese)"}
  }