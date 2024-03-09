<script>
  	/** @type {import('./$types').PageData} */
      export let data;
      const {items} = data;
</script>

<div class="guides">
    <ul>
      {#each items as item}
        <a href={`/guides/${item.id}`}>
          <li>{item.title}</li>
        </a>
      {/each}
    </ul>
  </div>
  
  <style>
    .guides {
      margin-top: 20px;
    }
    ul {
      list-style-type: none;
      display:flex;
      flex-direction: column;
      padding: 0;
    }
    a {
      display: inline-block;
      width: fit-content;
      margin-top: 10px;
      padding: 10px;
      border: 1px dotted rgba(255,255,255,0.2);
    }
  </style>