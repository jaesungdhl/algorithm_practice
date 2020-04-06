Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are give :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 x 10-11N.kg–2.m2

1ft = 0.3048m

1lb = 0.453592kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution

solution = (arr_val, arr_unit) => {
  //mass of object1
  if(arr_unit[0] === "g"){
    var object1 = arr_val[0] * 0.001;
  } else if(arr_unit[0] === "mg"){
    var object1 = arr_val[0] * 1e-6;
  } else if(arr_unit[0] === "μg"){
    var object1 = arr_val[0] * 1e-9;
  } else if(arr_unit[0] === "lb"){
    var object1 = arr_val[0] * 0.453592;
  } else {
    var object1 = arr_val[0];
  }

  //mass of object2
  if(arr_unit[1] === "g"){
    var object2 = arr_val[1] * 0.001;
  } else if(arr_unit[1] === "mg"){
    var object2 = arr_val[1] * 1e-6;
  } else if(arr_unit[1] === "μg"){
    var object2 = arr_val[1] * 1e-9;
  } else if(arr_unit[1] === "lb"){
    var object2 = arr_val[1] * 0.453592;
  } else {
    var object2 = arr_val[1];
  }

  //distance between two objects
  if(arr_unit[2] === "cm"){
    var distance = arr_val[2] * 0.01;
  } else if(arr_unit[2] === "mm"){
    var distance = arr_val[2] * 0.001;
  } else if(arr_unit[2] === "μm"){
    var distance = arr_val[2] * 1e-6;
  } else if(arr_unit[2] === "ft"){
    var distance = arr_val[2] * 0.3048;
  } else {
    var distance = arr_val[2];
  }

  const G = 6.67e-11;
  var force = (G * object1 * object2) / (Math.pow(distance, 2));

  return force;
};
