<script>
    import Title from '$lib/components/Title.svelte';
    import '../../styles/global.css';
    const year = new Date().getFullYear();
    </script>


<header>
    <Title />
</header>
  

<main>
    <slot />
</main>

<footer>
    <p> Copyright &copy; {year} </p>
</footer>

<style>
    header {
      display: flex;
      justify-content: center;
    }
    main {
      max-width: 960px;
      margin: 20px auto;
    }
    footer {
      text-align: center;
    }
  </style>