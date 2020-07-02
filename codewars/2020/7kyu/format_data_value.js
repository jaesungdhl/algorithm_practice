You get input data as a number (of megabytes). Your task is to convert it to the string adding 'MB' or 'GB' or 'TB' correctly.

Find the details below:

900 -> '900MB'
1900 -> '1GB 900MB'
568200 -> '568GB 200MB'
1000000 -> '1TB'
1234567 -> '1TB 234GB 567MB'
P.S. 0 <= input number < 1000000000

function formatDataValue(data) {
    // good luck
    if(data >= 1000000) {
      let TB = Math.floor(data/1000000);
      data -= (TB * 1000000);
      let GB = Math.floor(data/1000);
      data -= (GB * 1000);
      let MB = data;
      
      return (TB > 0 ? `${TB}TB` : "") + (GB > 0 ? ` ${GB}GB` : "") + (MB > 0 ? ` ${MB}MB` : "");
    } else if(data >= 1000) {
      let GB = Math.floor(data/1000);
      data -= (GB * 1000);
      let MB = data;
      
      return (GB > 0 ? `${GB}GB` : "") + (MB > 0 ? ` ${MB}MB` : "");
    } else {
      return `${data}MB`;
    }
  }

  function formatDataValue(data) {
    [m,g,t] = [data%1000,Math.floor(data%1000000/1000),Math.floor(data/1000000)]
    res = '';
    if(t>0){
      res+=t+'TB '
    }
    if(g>0){
      res+=g+'GB '
    }
    if(m>0){
      res+=m+'MB'
    }
    return res.replace(/ $/,'') || '0MB'
  }