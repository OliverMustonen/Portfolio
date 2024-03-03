import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


const gltfLoader = new GLTFLoader()

// Debug
//const gui = new dat.GUI() 

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Dragon
const spaceTexture = new THREE.TextureLoader().load('space.png');
scene.background = spaceTexture;

let tl = gsap.timeline({repeat: -1})

    // Frame
gltfLoader.load('oliver_frame.gltf', (frame) => {
 
    scene.add(frame.scene)
    frame.scene.scale.set(0.4, 0.4, 0.4)
    frame.scene.rotation.set(0, 4.5, 0)
    frame.scene.position.set(0.4, -1.2, -1.2)
        
        tl.to(frame.scene.rotation, { y: 4.7, duration: 3, ease: 'linear', transformOrigin: 'center'})
        tl.to(frame.scene.rotation, { y: 4.5, duration: 3, ease: 'linear', transformOrigin: 'center'})
       
    
})

const pointLight_0 = new THREE.PointLight(0xffffff, 1)
pointLight_0.position.x = -1
pointLight_0.position.y = 1
pointLight_0.position.z = 0
pointLight_0.intensity = 0.2
scene.add(pointLight_0)
/*  const pointLightHelper_w = new THREE.PointLightHelper(pointLight_0, 1)
scene.add(pointLightHelper_w)  */
    
    //Icon-vscode
    const vscodeTexture = new THREE.TextureLoader().load('vscode_logo.png');
    const vscodeMap = new THREE.TextureLoader().load('vscode_map.png');
    
    const vscode_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: vscodeTexture,
        normalMap: vscodeMap,
      })
    );
    scene.add(vscode_logo);
    vscode_logo.metalness = 0,466
    vscode_logo.roughness = 0,351
    vscode_logo.position.set(6, -10,24.5)
    
    /*  gui.add(vscode_logo.position, 'x')
    gui.add(vscode_logo.position, 'y')
    gui.add(vscode_logo.position, 'z') */
    
    

        //Icon-vs-code-text    
const vscode_text = new THREE.TextureLoader().load('vs.JPG');
const vscode_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: vscode_text }));

    scene.add(vscode_logo_text);
    vscode_logo_text.rotation.y = 3.8
    vscode_logo_text.position.set(6, -11,24.5)
   
        //Icon-html
    const htmlTexture = new THREE.TextureLoader().load('html.png');
    const htmlMap = new THREE.TextureLoader().load('html_map.png');
    
    const html_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: htmlTexture,
        normalMap: htmlMap,
      })
    );
    scene.add(html_logo);
    html_logo.metalness = 0,466
    html_logo.roughness = 0,351
    html_logo.position.set(4.5, -10,24.5)
   

        //Icon-html-text
const html_text = new THREE.TextureLoader().load('html.JPG');
const html_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: html_text }));

    scene.add(html_logo_text);
    html_logo_text.rotation.y = 3
    html_logo_text.position.set(4.5, -11,24.5)
    


            //Icon-css
    const cssTexture = new THREE.TextureLoader().load('css.png');
    const cssMap = new THREE.TextureLoader().load('css_map.png');
    
    const css_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: cssTexture,
        normalMap: cssMap,
      })
    );
    scene.add(css_logo);
    css_logo.metalness = 0,466
    css_logo.roughness = 0,351
    css_logo.position.set(3, -10,24.5)
    

        //Icon-css-text
const css_text = new THREE.TextureLoader().load('css.JPG');
const css_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: css_text }));

    scene.add(css_logo_text);
    css_logo_text.rotation.y = 3
    css_logo_text.position.set(3, -11,24.5)
    

                //Icon-JS
    const jsTexture = new THREE.TextureLoader().load('javascript_logo.png');
    const jsMap = new THREE.TextureLoader().load('js_map.png');
    
    const js_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: jsTexture,
        normalMap: jsMap,
      })
    );
    scene.add(js_logo);
    js_logo.metalness = 0,466
    js_logo.roughness = 0,351
    js_logo.position.set(1.75, -10,24.5)
   

        //Icon-JS-text
const js_text = new THREE.TextureLoader().load('javascript.JPG');
const js_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: js_text }));

    scene.add(js_logo_text);
    js_logo_text.rotation.y = 4
    js_logo_text.position.set(1.75, -11,24.5)
    


                    //Icon-node.js
    const nodejsTexture = new THREE.TextureLoader().load('nodejs.png');
    const nodejsMap = new THREE.TextureLoader().load('nodejs_map.png');
    
    const nodejs_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: nodejsTexture,
        normalMap: nodejsMap,
      })
    );
    scene.add(nodejs_logo);
    nodejs_logo.metalness = 0,466
    nodejs_logo.roughness = 0,351
    nodejs_logo.position.set(6, -12.5,24.5)
    

        //Icon-node.js-text
const nodejs_text = new THREE.TextureLoader().load('nodejs.JPG');
const nodejs_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: nodejs_text }));

    scene.add(nodejs_logo_text);
    nodejs_logo_text.rotation.y = 4
    nodejs_logo_text.position.set(6, -13.5,24.5)
    

                        //Icon-react
    const reactTexture = new THREE.TextureLoader().load('react.png');
    const reactMap = new THREE.TextureLoader().load('react_map.png');
    
    const react_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: reactTexture,
        normalMap: reactMap,
      })
    );
    scene.add(react_logo);
    react_logo.metalness = 0,466
    react_logo.roughness = 0,351
    react_logo.position.set(4.5, -12.5,24.5)
   

        //Icon-react-text
const react_text = new THREE.TextureLoader().load('react.JPG');
const react_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: react_text }));

    scene.add(react_logo_text);
    react_logo_text.rotation.y = 4
    react_logo_text.position.set(4.5, -13.5,24.5)
    

                            //Icon-angular
    const angularTexture = new THREE.TextureLoader().load('angular.png');
    const angularMap = new THREE.TextureLoader().load('angular_map.png');
    
    const angular_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: angularTexture,
        normalMap: angularMap,
      })
    );
    scene.add(angular_logo);
    angular_logo.metalness = 0,466
    angular_logo.roughness = 0,351
    angular_logo.position.set(3, -12.5,24.5)
    

        //Icon-angular-text
const angular_text = new THREE.TextureLoader().load('angular.JPG');
const angular_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: angular_text }));

    scene.add(angular_logo_text);
    angular_logo_text.rotation.y = 4
    angular_logo_text.position.set(3, -13.5,24.5)
    

                                //Icon-vue

    const vueTexture = new THREE.TextureLoader().load('vue.png');
    const vueMap = new THREE.TextureLoader().load('vue_map.png');
    
    const vue_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: vueTexture,
        normalMap: vueMap,
      })
    );
    scene.add(vue_logo);
    vue_logo.metalness = 0,466
    vue_logo.roughness = 0,351
    vue_logo.position.set(1.75, -12.5,24.5)
    

        //Icon-vue-text
const vue_text = new THREE.TextureLoader().load('vue.JPG');
const vue_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: vue_text }));

    scene.add(vue_logo_text);
    vue_logo_text.rotation.y = 4
    vue_logo_text.position.set(1.75, -13.5,24.5)
    
                                    //Icon-threejs

    const threejsTexture = new THREE.TextureLoader().load('threejs.png');
    const threejsMap = new THREE.TextureLoader().load('threejs_map.png');
    
    const threejs_logo = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        map: threejsTexture,
        normalMap: threejsMap,
      })
    );
    scene.add(threejs_logo);
    threejs_logo.metalness = 0,466
    threejs_logo.roughness = 0,351
    threejs_logo.position.set(0.5, -12.5,24.5)
    



        //Icon-vue-text
const threejs_text = new THREE.TextureLoader().load('threejs.JPG');
const threejs_logo_text = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: threejs_text }));

    scene.add(threejs_logo_text);
    threejs_logo_text.rotation.y = 3
    threejs_logo_text.position.set(0.5, -13.5,24.5)

   
// Torus

const geometry = new THREE.TorusGeometry(6, 2, 14, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const scroll_hid = document.getElementById("body")
 //Projekt_1

    const video_1 = document.getElementById("vid-1");
    const vidTexture_1 = new THREE.VideoTexture(video_1);

    vidTexture_1.minFilter = THREE.LinearFilter;
    vidTexture_1.magFilter = THREE.LinearFilter;
    
    const projekt_1 = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 1, 1,),
      new THREE.MeshStandardMaterial({
        map: vidTexture_1,
        side: THREE.FrontSide,
        toneMapped: false,
      })
    );
    scene.add(projekt_1);
    
    projekt_1.position.x = -2.4
    projekt_1.position.y = .6
    projekt_1.position.z = 17.5
    projekt_1.rotation.y = 1.5
  

    const pr_1 = document.getElementById('Proj-1')

 //Projekt_2

 const video_2 = document.getElementById("vid-2");
 const vidTexture_2 = new THREE.VideoTexture(video_2);

 vidTexture_2.minFilter = THREE.LinearFilter;
 vidTexture_2.magFilter = THREE.LinearFilter;
 
 const projekt_2 = new THREE.Mesh(
   new THREE.PlaneGeometry(2, 1, 1,),
   new THREE.MeshStandardMaterial({
     map: vidTexture_2,
     side: THREE.FrontSide,
     toneMapped: false,
   })
 );
 scene.add(projekt_2);
 
 projekt_2.position.x = -2.4
 projekt_2.position.y = -.6
 projekt_2.position.z = 17.5
 projekt_2.rotation.y = 1.5

 const pr_2 = document.getElementById('Proj-2')
 //to remove Pojects, Ezperience and Education when clicking the first 2 objects
 const proj_title = document.getElementById('proj-title')
 const edu = document.getElementById('edu')
 const exp = document.getElementById('exp')

 //Projekt_3

 const video_3 = document.getElementById("vid-3");
 const vidTexture_3 = new THREE.VideoTexture(video_3);

 vidTexture_3.minFilter = THREE.LinearFilter;
 vidTexture_3.magFilter = THREE.LinearFilter;
 
 const projekt_3 = new THREE.Mesh(
   new THREE.PlaneGeometry(2, 1, 1,),
   new THREE.MeshStandardMaterial({
     map: vidTexture_3,
     side: THREE.FrontSide,
     toneMapped: false,
   })
 );
 scene.add(projekt_3);
 
 projekt_3.position.x = -2
 projekt_3.position.y = -1.5
 projekt_3.position.z = 20
 projekt_3.rotation.y = 2

 const pr_3 = document.getElementById('Proj-3')

 //Projekt_4

 const video_4 = document.getElementById("vid-4");
 const vidTexture_4 = new THREE.VideoTexture(video_4);

 vidTexture_4.minFilter = THREE.LinearFilter;
 vidTexture_4.magFilter = THREE.LinearFilter;
 
 const projekt_4 = new THREE.Mesh(
   new THREE.PlaneGeometry(2, 1, 1,),
   new THREE.MeshStandardMaterial({
     map: vidTexture_4,
     side: THREE.FrontSide,
     toneMapped: false,
   })
 );
 scene.add(projekt_4);
 
 projekt_4.position.x = -2
 projekt_4.position.y = -2.8
 projekt_4.position.z = 20
 projekt_4.rotation.y = 2

 const pr_4 = document.getElementById('Proj-4')

  //Projekt_5

  const video_5 = document.getElementById("vid-5");
  const vidTexture_5 = new THREE.VideoTexture(video_5);
 
  vidTexture_5.minFilter = THREE.LinearFilter;
  vidTexture_5.magFilter = THREE.LinearFilter;
  
  const projekt_5 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 1, 1,),
    new THREE.MeshStandardMaterial({
      map: vidTexture_5,
      side: THREE.FrontSide,
      toneMapped: false,
    })
  );
  scene.add(projekt_5);
  
  projekt_5.position.x = .6
  projekt_5.position.y = -2.8
  projekt_5.position.z = 22
  projekt_5.rotation.y = 3
 
 const pr_5 = document.getElementById('Proj-5')

  //Projekt_6

  const video_6 = document.getElementById("vid-6");
  const vidTexture_6 = new THREE.VideoTexture(video_6);
 
  vidTexture_6.minFilter = THREE.LinearFilter;
  vidTexture_6.magFilter = THREE.LinearFilter;
  
  const projekt_6 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 1, 1,),
    new THREE.MeshStandardMaterial({
      map: vidTexture_6,
      side: THREE.FrontSide,
      toneMapped: false,
    })
  );
  scene.add(projekt_6);
  
  projekt_6.position.x = .6
  projekt_6.position.y = -4.2
  projekt_6.position.z = 22
  projekt_6.rotation.y = 3
  
 
 const pr_6 = document.getElementById('Proj-6')

  //Projekt_7

  const video_7 = document.getElementById("vid-7");
  const vidTexture_7 = new THREE.VideoTexture(video_7);
 
  vidTexture_7.minFilter = THREE.LinearFilter;
  vidTexture_7.magFilter = THREE.LinearFilter;
  
  const projekt_7 = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 1, 1,),
    new THREE.MeshStandardMaterial({
      map: vidTexture_7,
      side: THREE.FrontSide,
      toneMapped: false,
    })
  );
  scene.add(projekt_7);
  
  projekt_7.position.x = 2.9
  projekt_7.position.y = -4.2
  projekt_7.position.z = 21.7
  projekt_7.rotation.y = 3.9
 
 const pr_7 = document.getElementById('Proj-7')

   //Projekt_8

   const video_8 = document.getElementById("vid-8");
   const vidTexture_8 = new THREE.VideoTexture(video_8);
  
   vidTexture_8.minFilter = THREE.LinearFilter;
   vidTexture_8.magFilter = THREE.LinearFilter;
   
   const projekt_8 = new THREE.Mesh(
     new THREE.PlaneGeometry(2, 1, 1,),
     new THREE.MeshStandardMaterial({
       map: vidTexture_8,
       side: THREE.FrontSide,
       toneMapped: false,
     })
   );
   scene.add(projekt_8);
   
   projekt_8.position.x = 2.9
   projekt_8.position.y = -5.7
   projekt_8.position.z = 21.7
   projekt_8.rotation.y = 3.9
  
  const pr_8 = document.getElementById('Proj-8')

   //Projekt_9

   const video_9 = document.getElementById("vid-9");
   const vidTexture_9 = new THREE.VideoTexture(video_9);
  
   vidTexture_9.minFilter = THREE.LinearFilter;
   vidTexture_9.magFilter = THREE.LinearFilter;
   
   const projekt_9 = new THREE.Mesh(
     new THREE.PlaneGeometry(2, 1, 1,),
     new THREE.MeshStandardMaterial({
       map: vidTexture_9,
       side: THREE.FrontSide,
       toneMapped: false,
     })
   );
   scene.add(projekt_9);
   
   projekt_9.position.x = 3.9
   projekt_9.position.y = -4.2
   projekt_9.position.z = 19
   projekt_9.rotation.y = 4.7
  
  const pr_9 = document.getElementById('Proj-9')  

   //Projekt_10

   const video_10 = document.getElementById("vid-10");
   const vidTexture_10 = new THREE.VideoTexture(video_10);
  
   vidTexture_10.minFilter = THREE.LinearFilter;
   vidTexture_10.magFilter = THREE.LinearFilter;
   
   const projekt_10 = new THREE.Mesh(
     new THREE.PlaneGeometry(2, 1, 1,),
     new THREE.MeshStandardMaterial({
       map: vidTexture_10,
       side: THREE.FrontSide,
       toneMapped: false,
     })
   );
   scene.add(projekt_10);
   
   projekt_10.position.x = 3.9
   projekt_10.position.y = -5.7
   projekt_10.position.z = 19
   projekt_10.rotation.y = 4.7
  
  const pr_10 = document.getElementById('Proj-10')  

     //Projekt_11

     const video_11 = document.getElementById("vid-11");
     const vidTexture_11 = new THREE.VideoTexture(video_11);
    
     vidTexture_11.minFilter = THREE.LinearFilter;
     vidTexture_11.magFilter = THREE.LinearFilter;
     
     const projekt_11 = new THREE.Mesh(
       new THREE.PlaneGeometry(2, 1, 1,),
       new THREE.MeshStandardMaterial({
         map: vidTexture_11,
         side: THREE.FrontSide,
         toneMapped: false,
       })
     );
     scene.add(projekt_11);
     
     projekt_11.position.x = 2.6
     projekt_11.position.y = -5.7
     projekt_11.position.z = 17
     projekt_11.rotation.y = 5.8
    
    const pr_11 = document.getElementById('Proj-11')  

         //Projekt_12

         const video_12 = document.getElementById("vid-12");
         const vidTexture_12 = new THREE.VideoTexture(video_12);
        
         vidTexture_12.minFilter = THREE.LinearFilter;
         vidTexture_12.magFilter = THREE.LinearFilter;
         
         const projekt_12 = new THREE.Mesh(
           new THREE.PlaneGeometry(2, 1, 1,),
           new THREE.MeshStandardMaterial({
             map: vidTexture_12,
             side: THREE.FrontSide,
             toneMapped: false,
           })
         );
         scene.add(projekt_12);
         
         projekt_12.position.x = 2.6
         projekt_12.position.y = -7.1
         projekt_12.position.z = 17
         projekt_12.rotation.y = 5.8
        
        const pr_12 = document.getElementById('Proj-12')  

         //Projekt_13

         const dragon = new THREE.TextureLoader().load('msi_contest.png')
         dragon.minFilter = THREE.LinearFilter;
         dragon.magFilter = THREE.LinearFilter;
         
         const projekt_13 = new THREE.Mesh(
           new THREE.PlaneGeometry(2, 1, 1,),
           new THREE.MeshStandardMaterial({
             map: dragon,
           
             
           })
         );
       
         scene.add(projekt_13);

         projekt_13.position.x = 0
         projekt_13.position.y = -7.1
         projekt_13.position.z = 16
         projekt_13.rotation.y = 6.2

        /*    gui.add(projekt_13.position, 'x')
         gui.add(projekt_13.rotation, 'y')
         gui.add(projekt_13.position, 'z')  */
      
        const pr_13 = document.getElementById('Proj-13')  

           //Projekt_14

           const video_14 = document.getElementById("vid-14");
           const vidTexture_14 = new THREE.VideoTexture(video_14);
          
           vidTexture_14.minFilter = THREE.LinearFilter;
           vidTexture_14.magFilter = THREE.LinearFilter;
           
           const projekt_14 = new THREE.Mesh(
             new THREE.PlaneGeometry(2, 1, 1,),
             new THREE.MeshStandardMaterial({
               map: vidTexture_14,
               side: THREE.FrontSide,
               toneMapped: false,
             })
           );
           scene.add(projekt_14);
           
           projekt_14.position.x = 0
           projekt_14.position.y = -8.5
           projekt_14.position.z = 16
           projekt_14.rotation.y = 6.2
          
          const pr_14 = document.getElementById('Proj-14')  

           //Projekt_15

           const video_15 = document.getElementById("vid-15");
           const vidTexture_15 = new THREE.VideoTexture(video_15);
          
           vidTexture_15.minFilter = THREE.LinearFilter;
           vidTexture_15.magFilter = THREE.LinearFilter;
           
           const projekt_15 = new THREE.Mesh(
             new THREE.PlaneGeometry(2, 1, 1,),
             new THREE.MeshStandardMaterial({
               map: vidTexture_15,
               side: THREE.FrontSide,
               toneMapped: false,
             })
           );
           scene.add(projekt_15);
           
           projekt_15.position.x = -2
           projekt_15.position.y = -7.1
           projekt_15.position.z = 17
           projekt_15.rotation.y = 7.2
          
          const pr_15 = document.getElementById('Proj-15')  
          //Projekt_16

          const video_16 = document.getElementById("vid-16");
          const vidTexture_16 = new THREE.VideoTexture(video_16);
         
          vidTexture_16.minFilter = THREE.LinearFilter;
          vidTexture_16.magFilter = THREE.LinearFilter;
          
          const projekt_16 = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 1, 1,),
            new THREE.MeshStandardMaterial({
              map: vidTexture_16,
              side: THREE.FrontSide,
              toneMapped: false,
            })
          );
          scene.add(projekt_16);
          
          projekt_16.position.x = -2
          projekt_16.position.y = -8.5
          projekt_16.position.z = 17
          projekt_16.rotation.y = 7.2
         
         const pr_16 = document.getElementById('Proj-16')  

            //Projekt_17

            const video_17 = document.getElementById("vid-17");
            const vidTexture_17 = new THREE.VideoTexture(video_17);
           
            vidTexture_17.minFilter = THREE.LinearFilter;
            vidTexture_17.magFilter = THREE.LinearFilter;
            
            const projekt_17 = new THREE.Mesh(
              new THREE.PlaneGeometry(2, 1, 1,),
              new THREE.MeshStandardMaterial({
                map: vidTexture_17,
                side: THREE.FrontSide,
                toneMapped: false,
              })
            );
            scene.add(projekt_17);
            
            projekt_17.position.x = -3
            projekt_17.position.y = -7.1
            projekt_17.position.z = 19.1
            projekt_17.rotation.y = 7.9
           
           const pr_17 = document.getElementById('Proj-17')  
             //Projekt_18

             const video_18 = document.getElementById("vid-18");
             const vidTexture_18 = new THREE.VideoTexture(video_18);
            
             vidTexture_18.minFilter = THREE.LinearFilter;
             vidTexture_18.magFilter = THREE.LinearFilter;
             
             const projekt_18 = new THREE.Mesh(
               new THREE.PlaneGeometry(2, 1, 1,),
               new THREE.MeshStandardMaterial({
                 map: vidTexture_18,
                 side: THREE.FrontSide,
                 toneMapped: false,
               })
             );
             scene.add(projekt_18);
             
             projekt_18.position.x = -3
             projekt_18.position.y = -8.5
             projekt_18.position.z = 19.1
             projekt_18.rotation.y = 7.9
            
            const pr_18 = document.getElementById('Proj-18') 
              //Projekt_19

              const video_19 = document.getElementById("vid-19");
              const vidTexture_19 = new THREE.VideoTexture(video_19);
             
              vidTexture_19.minFilter = THREE.LinearFilter;
              vidTexture_19.magFilter = THREE.LinearFilter;
              
              const projekt_19 = new THREE.Mesh(
                new THREE.PlaneGeometry(2, 1, 1,),
                new THREE.MeshStandardMaterial({
                  map: vidTexture_19,
                  side: THREE.FrontSide,
                  toneMapped: false,
                })
              );
              scene.add(projekt_19);
              
              projekt_19.position.x = -2
              projekt_19.position.y = -8.5
              projekt_19.position.z = 21.2
              projekt_19.rotation.y = 8.8
             
             const pr_19 = document.getElementById('Proj-19') 


       
      

// Lights

const pointLight = new THREE.PointLight(0xffffff, 2)
pointLight.position.x = 0
pointLight.position.y = -1
pointLight.position.z = 19
pointLight.intensity = .7
scene.add(pointLight)
const pointLight_1 = new THREE.PointLight(0xffffff, 2)
pointLight_1.position.x = 0
pointLight_1.position.y = -10
pointLight_1.position.z = 20
pointLight_1.intensity = .7
pointLight_1.rotation.y = 6

scene.add(pointLight_1)


/*  const pointLightHelper_w = new THREE.PointLightHelper(pointLight, 1)
scene.add(pointLightHelper_w) 
const pointLightHelper_w_2 = new THREE.PointLightHelper(pointLight_1, 1)
scene.add(pointLightHelper_w_2)  */


function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(200));
  
    star.position.set(x, y, z);
    scene.add(star);
  }


  Array(200).fill().forEach(addStar);
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0.5
camera.position.z = 1

/* gui.add(camera.position, 'z').min(-9).max(9)
gui.add(camera.position, 'x').min(-9).max(9)
gui.add(camera.position, 'y').min(-9).max(9)
gui.add(camera.rotation, 'y').min(-9).max(9) */
scene.add(camera)

// Controls
/* const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true */



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Scroll Animation
 
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    
   
    camera.rotation.y = t * -0.0009;
    if(camera.rotation.y < 1.75) {
      gsap.to(camera.position, {z: t * -0.01})
      gsap.to(camera.position, {x: t * -0.0002})
      gsap.to(camera.position, {y: 0})
    
    }
    if(camera.rotation.y > 1.8) {
      gsap.to(camera.position, {y: t * 0.001})
      camera.position.x = camera.position.x;
      camera.position.z = camera.position.z;
    }
    
   
    // console.log(camera.position.x) 
    //  console.log(camera.position.z) 
    //  console.log(camera.rotation.y)
     //console.log(camera.position.y)
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();


  const mouse = new THREE.Vector2()
  const raycaster = new THREE.Raycaster()
  let backoverflow = 0;
  let overflowscroll;

document.addEventListener('click', (event) => {
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1
   
    
    console.log(camera.position.y)

console.log(backoverflow);
       //Raycaster

    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(objs)

  


      if (intersects.find(intersect => intersect.object == projekt_1)) {
          
          gsap.to(camera.position, {x: -1.5})
          gsap.to(camera.position, {y: .6})
          gsap.to(camera.position, {z: 17.15})
          gsap.to(camera.rotation, {y: 1.5})
          backoverflow = 1;
          overflowscroll = 1;
      }
    


      if (intersects.find(intersect => intersect.object == projekt_2)) {
          
          gsap.to(camera.position, {x: -1.5})
          gsap.to(camera.position, {y: -.7})
          gsap.to(camera.position, {z: 17.15})
          gsap.to(camera.rotation, {y: 1.5})
          backoverflow = 2;
          overflowscroll = 1;
      }
    
    
      if (intersects.find(intersect => intersect.object == projekt_3)) {
          
          gsap.to(camera.position, {x: -1.1})
          gsap.to(camera.position, {y: -1.5})
          gsap.to(camera.position, {z: 19.9})
          gsap.to(camera.rotation, {y: 2})
          backoverflow = 3;
          overflowscroll = 1;
      }

      if (intersects.find(intersect => intersect.object == projekt_4)) {
          
        gsap.to(camera.position, {x: -1.1})
        gsap.to(camera.position, {y: -2.8})
        gsap.to(camera.position, {z: 19.9})
        gsap.to(camera.rotation, {y: 2})
        backoverflow = 4;
        overflowscroll = 1;
    }

    if (intersects.find(intersect => intersect.object == projekt_5)) {
          
      gsap.to(camera.position, {x: .6})
      gsap.to(camera.position, {y: -2.8})
      gsap.to(camera.position, {z: 21})
      gsap.to(camera.rotation, {y: 2.8})
      backoverflow = 5;
      overflowscroll = 1;
  }

  if (intersects.find(intersect => intersect.object == projekt_6)) {
          
    gsap.to(camera.position, {x: .6})
    gsap.to(camera.position, {y: -4.2})
    gsap.to(camera.position, {z: 21})
    gsap.to(camera.rotation, {y: 2.8})
    backoverflow = 6;
    overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_7)) {
          
  gsap.to(camera.position, {x: 2})
  gsap.to(camera.position, {y: -4.2})
  gsap.to(camera.position, {z: 21.4})
  gsap.to(camera.rotation, {y: 3.9})
  backoverflow = 7;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_8)) {
          
  gsap.to(camera.position, {x: 2})
  gsap.to(camera.position, {y: -5.7})
  gsap.to(camera.position, {z: 21.4})
  gsap.to(camera.rotation, {y: 3.9})
  backoverflow = 8;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_9)) {
          
  gsap.to(camera.position, {x: 2.9})
  gsap.to(camera.position, {y: -4.2})
  gsap.to(camera.position, {z: 18.5})
  gsap.to(camera.rotation, {y: 4.7})
  backoverflow = 9;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_10)) {
          
  gsap.to(camera.position, {x: 2.9})
  gsap.to(camera.position, {y: -5.7})
  gsap.to(camera.position, {z: 18.5})
  gsap.to(camera.rotation, {y: 4.7})
  backoverflow = 10;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_11)) {
          
  gsap.to(camera.position, {x: 2.5})
  gsap.to(camera.position, {y: -5.7})
  gsap.to(camera.position, {z: 18})
  gsap.to(camera.rotation, {y: 5.9})
  backoverflow = 11;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_12)) {
          
  gsap.to(camera.position, {x: 2.5})
  gsap.to(camera.position, {y: -7.1})
  gsap.to(camera.position, {z: 18})
  gsap.to(camera.rotation, {y: 5.9})
  backoverflow = 12;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_13)) {
          
  gsap.to(camera.position, {x: 0})
  gsap.to(camera.position, {y: -7.1})
  gsap.to(camera.position, {z: 17})
  gsap.to(camera.rotation, {y: 6.2})
  backoverflow = 13;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_14)) {
          
  gsap.to(camera.position, {x: 0.3})
  gsap.to(camera.position, {y: -8.5})
  gsap.to(camera.position, {z: 17})
  gsap.to(camera.rotation, {y: 6.2})
  backoverflow = 14;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_15)) {
          
  gsap.to(camera.position, {x: -1.1})
  gsap.to(camera.position, {y: -7.1})
  gsap.to(camera.position, {z: 17.3})
  gsap.to(camera.rotation, {y: 7.2})
  backoverflow = 15;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_16)) {
          
  gsap.to(camera.position, {x: -1.2})
  gsap.to(camera.position, {y: -8.5})
  gsap.to(camera.position, {z: 17.3})
  gsap.to(camera.rotation, {y: 7.2})
  backoverflow = 16;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_17)) {
          
  gsap.to(camera.position, {x: -2.2})
  gsap.to(camera.position, {y: -7.1})
  gsap.to(camera.position, {z: 18.7})
  gsap.to(camera.rotation, {y: 7.9})
  backoverflow = 17;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_18)) {
          
  gsap.to(camera.position, {x: -2.2})
  gsap.to(camera.position, {y: -8.5})
  gsap.to(camera.position, {z: 18.7})
  gsap.to(camera.rotation, {y: 7.9})
  backoverflow = 18;
  overflowscroll = 1;
}
if (intersects.find(intersect => intersect.object == projekt_19)) {
          
  gsap.to(camera.position, {x: -1.3})
  gsap.to(camera.position, {y: -8.5})
  gsap.to(camera.position, {z: 20.6})
  gsap.to(camera.rotation, {y: 8.8})
  backoverflow = 19;
  overflowscroll = 1;
}
    
  
})

const back1 = document.getElementById("backone");
const back2 = document.getElementById("backtwo");
const back3 = document.getElementById("backthree");
const back4 = document.getElementById("backfour");
const back5 = document.getElementById("backfive");
const back6 = document.getElementById("backsix");
const back7 = document.getElementById("backseven");
const back8 = document.getElementById("backeight");
const back9 = document.getElementById("backnine");
const back10 = document.getElementById("backten");
const back11 = document.getElementById("backeleven");
const back12 = document.getElementById("backtwelve");
const back13 = document.getElementById("backthirteen");
const back14 = document.getElementById("backfourteen");
const back15 = document.getElementById("backfifteen");
const back16 = document.getElementById("backsixteen");
const back17 = document.getElementById("backseventeen");
const back18 = document.getElementById("backeightteen");
const back19 = document.getElementById("backnineteen");
back1.addEventListener("click", backone);
back2.addEventListener("click", backtwo);
back3.addEventListener("click", backthree);
back4.addEventListener("click", backfour);
back5.addEventListener("click", backfive);
back6.addEventListener("click", backsix);
back7.addEventListener("click", backseven);
back8.addEventListener("click", backeight);
back9.addEventListener("click", backnine);
back10.addEventListener("click", backten);
back11.addEventListener("click", backeleven);
back12.addEventListener("click", backtwelve);
back13.addEventListener("click", backthirteen);
back14.addEventListener("click", backfourteen);
back15.addEventListener("click", backfifteen);
back16.addEventListener("click", backsixteen);
back17.addEventListener("click", backseventeen);
back18.addEventListener("click", backeightteen);
back19.addEventListener("click", backnineteen);

function backone() {
  
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: camera.position.z})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backtwo() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: camera.position.z})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backthree() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backfour() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backfive() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backsix() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backseven() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backeight() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backnine() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backten() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backeleven() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backtwelve() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backthirteen() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backfourteen() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backfifteen() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backsixteen() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backseventeen() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backeightteen() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}
function backnineteen() {
 
  const t = document.body.getBoundingClientRect().top;
  gsap.to(camera.position, {z: 19.43})
  gsap.to(camera.position, {x: 0.3868})
  gsap.to(camera.rotation, {y: t * -0.0009})
  backoverflow = 0;
  overflowscroll = 0;
}


   
/**
 * Animate//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 */
 document.addEventListener('mousemove', onDocumentMouseMove)


 let mouseX = 0
 let mouseY = 0
 
 let targetX = 9
 let targetY = 0

 const windowX = window.innerWidth /2;
const windowY = window.innerHeight /2;

 function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowX)
    mouseY = (event.clientY - windowY)
}

let objs = []

scene.traverse((object) => {
    if (object == projekt_1 || object == projekt_2 || object == projekt_3 || object == projekt_4 || object == projekt_5 || object == projekt_6 || object == projekt_7 || object == projekt_8 || object == projekt_9 || object == projekt_10 || object == projekt_11 || object == projekt_12 || object == projekt_13 || object == projekt_14 || object == projekt_15 || object == projekt_16 || object == projekt_17 || object == projekt_18 || object == projekt_19)
     objs.push(object)
      /* console.log(objs) */ 
})


const clock = new THREE.Clock()

const tick = () =>
{
    
    targetX = mouseX * .001
    targetY = mouseY * .001
    
    const elapsedTime = clock.getElapsedTime()
    
    vscode_logo.rotation.y += .5 * (targetX - vscode_logo.rotation.y)
    vscode_logo.rotation.x += .5 * (targetY - vscode_logo.rotation.x)
    vscode_logo.position.z += .5 * (targetY - vscode_logo.rotation.x)
    
    
    html_logo.rotation.y += .5 * (targetX - html_logo.rotation.y)
    html_logo.rotation.x += .5 * (targetY - html_logo.rotation.x)
    html_logo.position.z += .5 * (targetY - html_logo.rotation.x)

    css_logo.rotation.y += .5 * (targetX - css_logo.rotation.y)
    css_logo.rotation.x += .5 * (targetY - css_logo.rotation.x)
    css_logo.position.z += .5 * (targetY - css_logo.rotation.x)

    js_logo.rotation.y += .5 * (targetX - js_logo.rotation.y)
    js_logo.rotation.x += .5 * (targetY - js_logo.rotation.x)
    js_logo.position.z += .5 * (targetY - js_logo.rotation.x)

    nodejs_logo.rotation.y += .5 * (targetX - nodejs_logo.rotation.y)
    nodejs_logo.rotation.x += .5 * (targetY - nodejs_logo.rotation.x)
    nodejs_logo.position.z += .5 * (targetY - nodejs_logo.rotation.x)

    react_logo.rotation.y += .5 * (targetX - react_logo.rotation.y)
    react_logo.rotation.x += .5 * (targetY - react_logo.rotation.x)
    react_logo.position.z += .5 * (targetY - react_logo.rotation.x)

    angular_logo.rotation.y += .5 * (targetX - angular_logo.rotation.y)
    angular_logo.rotation.x += .5 * (targetY - angular_logo.rotation.x)
    angular_logo.position.z += .5 * (targetY - angular_logo.rotation.x)

    vue_logo.rotation.y += .5 * (targetX - vue_logo.rotation.y)
    vue_logo.rotation.x += .5 * (targetY - vue_logo.rotation.x)
    vue_logo.position.z += .5 * (targetY - vue_logo.rotation.x)

    threejs_logo.rotation.y += .5 * (targetX - threejs_logo.rotation.y)
    threejs_logo.rotation.x += .5 * (targetY - threejs_logo.rotation.x)
    threejs_logo.position.z += .5 * (targetY - threejs_logo.rotation.x)

    vidTexture_1.needsUpdate = true;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    
    
    
    renderer.render(scene, camera)
    
    
    if(backoverflow == 0) {
      exp.style.visibility = 'visible';
        proj_title.style.visibility = 'visible';
        edu.style.visibility = 'visible';
    }
//Project 1
    if (backoverflow == 1) {
        pr_1.style.visibility = 'visible';  
        exp.style.visibility = 'hidden';
        proj_title.style.visibility = 'hidden';
        edu.style.visibility = 'hidden';
    } 
    else {
      pr_1.style.visibility = 'hidden';
      scroll_hid.style.overflow = "visible";
      
  } 
//Project 2
    if (backoverflow == 2) {
      exp.style.visibility = 'hidden';
        proj_title.style.visibility = 'hidden';
        edu.style.visibility = 'hidden';
        pr_2.style.visibility = 'visible';
        
        
    } 
    else {
      pr_2.style.visibility = 'hidden';
      
      scroll_hid.style.overflow = "visible";
  } 
    
//Project 3
if (backoverflow == 3) {
  exp.style.visibility = 'hidden';
        proj_title.style.visibility = 'hidden';
    pr_3.style.visibility = 'visible';
} 
else {
    pr_3.style.visibility = 'hidden';
    scroll_hid.style.overflow = "visible";
}
//Project 4
if (backoverflow == 4) {
    pr_4.style.visibility = 'visible';
} 
else {
    pr_4.style.visibility = 'hidden';
    scroll_hid.style.overflow = "visible";
}
//Project 5
if (backoverflow == 5) {
    pr_5.style.visibility = 'visible';
} 
else {
    pr_5.style.visibility = 'hidden';
    scroll_hid.style.overflow = "visible";
}
//Project 6
if (backoverflow == 6) {
    pr_6.style.visibility = 'visible';
} 
else {
    pr_6.style.visibility = 'hidden';
    scroll_hid.style.overflow = "visible";
}
//Project 7
if (backoverflow == 7) {
    pr_7.style.visibility = 'visible';
} 
else {
    pr_7.style.visibility = 'hidden';
    scroll_hid.style.overflow = "visible";
}
//Project 8
if (backoverflow == 8) {
    pr_8.style.visibility = 'visible';
} 
else {
    pr_8.style.visibility = 'hidden';
    scroll_hid.style.overflow = "visible";
}
//Project 9
if (backoverflow == 9) {
    pr_9.style.visibility = 'visible';
} 
else {
    pr_9.style.visibility = 'hidden';
    scroll_hid.style.overflow = "visible";
}
//Project 10
if (backoverflow == 10) {
    pr_10.style.visibility = 'visible';
} 
else {
    pr_10.style.visibility = 'hidden';
    scroll_hid.style.overflow = "visible";
}
//Project 11
if (backoverflow == 11) {
  pr_11.style.visibility = 'visible';
} 
else {
  pr_11.style.visibility = 'hidden';
  scroll_hid.style.overflow = "visible";
}

//Project 12
if (backoverflow == 12) {
  pr_12.style.visibility = 'visible';
} 
else {
  pr_12.style.visibility = 'hidden';
  scroll_hid.style.overflow = "visible";
}
//Project 13
if (backoverflow == 13) {
  pr_13.style.visibility = 'visible';
} 
else {
  pr_13.style.visibility = 'hidden';
  scroll_hid.style.overflow = "visible";
}
//Project 14
if (backoverflow == 14) {
  pr_14.style.visibility = 'visible';
} 
else {
  pr_14.style.visibility = 'hidden';
  scroll_hid.style.overflow = "visible";
}
//Project 15
if (backoverflow == 15) {
  pr_15.style.visibility = 'visible';
} 
else {
  pr_15.style.visibility = 'hidden';
  scroll_hid.style.overflow = "visible";
}
//Project 16
if (backoverflow == 16) {
  pr_16.style.visibility = 'visible';
} 
else {
  pr_16.style.visibility = 'hidden';
  scroll_hid.style.overflow = "visible";
}
//Project 17
if (backoverflow == 17) {
  pr_17.style.visibility = 'visible';
} 
else {
  pr_17.style.visibility = 'hidden';
  scroll_hid.style.overflow = "visible";
}
//Project 18
if (backoverflow == 18) {
  pr_18.style.visibility = 'visible';
} 
else {
  pr_18.style.visibility = 'hidden';
  scroll_hid.style.overflow = "visible";
}
//Project 19
if (backoverflow == 19) {
  pr_19.style.visibility = 'visible';
} 
else {
  pr_19.style.visibility = 'hidden';
  scroll_hid.style.overflow = "visible";
}
if(overflowscroll == 1) {
  scroll_hid.style.overflow = "hidden";
  
}
         

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick();