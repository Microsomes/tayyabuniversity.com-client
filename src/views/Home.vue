<template>
  <div class="home" style="height:100vh;background:#22181C;display:flex;">
    <div style="100vh;width:50%;">
      <img src="../assets/homepagepromo.jpg" style="width:100%;height:100%;"/>
    </div>
    <div style="100vh;width:50%">

      <h1 style="font-family: 'M PLUS 1p', sans-serif;margin-top:0px;color:white">Welcome to the free University</h1>
      <p style="font-family: roboto;margin-top:0px;padding-left:30px;padding-right:30px;color:white">Your friendly guide to free university resources, and a helping hand to the world of possibilities. Explore learn and become more knowledge. Get unstuck on the sticky path of becoming a software developer</p>

    <div style="display:flex;justify-content:center;margin-top:20px;color:white;margin-top:30px">
      <table class="table" style="border:1px solid white;padding:20px;width:60%">
  <thead>
    <tr>
      <th scope="col" style="color:White">#</th>
      <th scope="col" style="color:White">Schedule</th>
      <th scope="col" style="color:White">Hour</th>
     </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td style="color:white;">Monday</td>
      <td style="color:white;">9PM +</td>
      </tr>
    
  </tbody>
    <tbody>
    <tr>
      <th scope="row">2</th>
      <td style="color:white;">Tuesday</td>
      <td style="color:white;">Any time+</td>
      </tr>
    
  </tbody>
    <tbody>
    <tr>
      <th scope="row">3</th>
      <td style="color:white;">Wednesday</td>
 <td style="color:white;">Any time+</td>      </tr>
    
  </tbody>
    <tbody>
    <tr>
      <th scope="row">4</th>
      <td style="color:white;">Thursday</td>
 <td style="color:white;">Any time+</td>      </tr>
    
  </tbody>
   </tbody>
    <tbody>
    <tr>
      <th scope="row">5</th>
      <td style="color:white;">Friday</td>
 <td style="color:white;">Any time+</td>      </tr>
    
  </tbody>
   </tbody>
    <tbody>
    <tr>
      <th scope="row">6</th>
      <td style="color:white;">Saturday</td>
 <td style="color:white;">Any time+</td>      </tr>
    
  </tbody>
   </tbody>
    <tbody>
    <tr>
      <th scope="row">7</th>
      <td style="color:white;">Sunday</td>
 <td style="color:white;">Any time+</td>      </tr>
    
  </tbody>
</table>
</div>


<div style="display:flex;justify-content:center;margin-top:20px;">
<div class="alert alert-success" style="padding-left:20px;padding-right:20px;" role="alert">
  0/100 waiting in Queue (100 Spots available daily)
</div>
</div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
