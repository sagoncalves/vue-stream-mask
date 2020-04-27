## Vue Stream Mask Component

You can see it working live here [vue-stream-mask demo](https://sagoncalves.github.io/vue-stream-mask/ "vue-stream-mask demo")

#### Add to your project
``` bash
yarn add vue-stream-mask
```

#### Import component
``` javascript
import * as VueStreamMask from "vue-stream-mask"

Vue.use(VueStreamMask)
```

#### HTML
``` html
<vue-stream-mask />
```

## Ways of use
#### - Default -
By default when the component loads it ask for the camera media and later emits the loaded event wich serves as a parameter the stream that you can add to a RTCPeerConnection, If you want to avoid this behaviour check the on demand way of use.

Example:
``` html
<vue-stream-mask @loaded="handleStream" />

<!-- somewhere else on like on your code methods -->

<script>
	function handleStream(stream){
		// Do things to the stream
		// E.g. Send it to another computer using an RTCPeerConnection
		//      pc is an RTCPeerConnection created elsewhere
		this.pc.addStream(stream);
	}
	pc.addStream(stream);
</script>

```

#### - On demand -
If you want to ask for the media stream at a certain moment on your app

Example:
``` html
<vue-stream-mask await ref="vueStreamRef"/>

<!-- somewhere else on like on your code methods -->
<script>
	async function initStream(){
		let stream = await this.$refs.vueStreamRef.init()
		// Do things to the stream
		// E.g. Send it to another computer using an RTCPeerConnection
		//      pc is an RTCPeerConnection created elsewhere
		this.pc.addStream(stream);
	}
	pc.addStream(stream);
</script>

```

## Props
| Property name | Description                    |
| ------------- | ------------------------------ |
| `await`      | Component wont ask for media stream until you run the init() func       |
| `show`      | Displays a canvas element with the local stream|
| `multiple`   | Enables multiple person segmentation  |
| `background`   | If enabled it replaces persons background with given img url  |
| `backgroundBlurAmount`   | if background prop its not defined you can handle with this one how much blur you want in the background  |