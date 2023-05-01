<script>
// @ts-nocheck

  import { Node, Svelvet, Minimap, Controls, Background } from 'svelvet';
</script>

<div id="fixed" class="h-screen">
<Svelvet theme="dark" snapTo=22 id="my-canvas" controls>
  <Node connections={["drmseq"]} bgColor="blueviolet" label="WaveDream" outputs=2 />
  <Node inputs=3 id="drmseq" label="Dream Sequence" bgColor="turquoise" center />
  <Node inputs=3 id="test" label="test" bgColor="grey" position={{ x: 300, y: 150}} />
</Svelvet>
</div>