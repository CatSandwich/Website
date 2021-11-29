<template>
  <div>
    <h1>Projects</h1>

    <project name="Shooter" :categories="['C#', 'Unity']" source="https://github.com/CatSandwich/Shooter">
      <em>A one-week shooter project with incremental progression.</em>
      <p>The highlights of this project are: </p>
      <ul>
        <li>Finished game</li>
        <li>Simple upgrade system</li>
      </ul>
      <p>
        I hold the belief that finishing a product is in itself a skill. I have a bad habit of leaving unfinished projects
        on my drive to never be touched again. While I do learn from them, I fail to learn the skill of finishing a product.
        For this project, that was my core goal, and I achieved it.
      </p>
      <p>
        While I wrote the majority of the codebase, the system I would like to highlight is the upgrades system. I wrote
        a class (ScriptableObject) which handled purchasable, serialized upgrades with single or multiple upgrade tiers.
        With this system, creating a new upgrade is as simple as filling in data.
      </p>
    </project>

    <project name="Game of Life" :categories="['C#', 'Unity']" source="https://github.com/CatSandwich/Game-of-Life">
      <em>A head to head re-imagination of the classic zero-player game, <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a>.</em>
      <p>The highlights of this project are: </p>
      <ul>
        <li>Networked (Client-server)</li>
        <li>Multi-threaded simulation with callbacks</li>
      </ul>
      <p>
        This was my first networked project. The game is Conway's Game of Life, but you must destroy your opponent's
        cells while replicating your own. Each player places a number of cells on their end. The simulation is run,
        and whoever has the most cells after a set number of ticks passes is deemed victorious.
      </p>
      <p>
        To avoid unnecessary packets, the clients all run the simulation independently, verified by the server. To get
        this running efficiently, the simulation is designed to be run on a background thread with callbacks at important
        points (each tick, simulation end). For the client, this means caching the state for rendering. For the server, it
        runs the simulation until an end result is reached.
      </p>
    </project>

    <project name="BotSandwich" :categories="['C#']" source="https://github.com/CatSandwich/BotSandwich">
      <em>A Discord bot framework expanding on Discord.Net that makes command handling as simple as a function definition.</em>
      <p>The highlights of this project are: </p>
      <ul>
        <li>Reflection / Attributes</li>
        <li>Tools</li>
      </ul>
      <p>
        Discord bots were some of the first projects I ever did in C#, and to this day are my go-to projects when learning
        new concepts and features in the language and framework. One of the concepts I learned through bots is reflection.
        I, like many programmers, like to be lazy. By lazy, I mean I like to spend tens of hours to automate what was
        previously taking me a few hours to do manually.
      </p>
      <p>
        In this framework, I reduced command handling to nothing but a function definition with a few attributes thrown in.
        Simply mark the method with an attribute containing the command name and aliases, and the framework handles the rest.
        If the command needs more context, you can define the method with any parameters you need, as long as they're decorated
        with attributes to tell the framework how to handle them. Below is an example command that makes the user admin:
      </p>
      <snippet link="https://raw.githubusercontent.com/CatSandwich/BotSandwich/main/Modules/Abuse/AbuseModule.cs" :start="14" :end="25" lang="c#"/>
      <p>
        I went so far as to use parameter attributes to dynamically build the argument list when calling the command handler.
        The argument parameter is automatically pulled from the message and parsed into the right data type (anything from number to user object).
      </p>
    </project>

    <project name="Website" :categories="['Vue.js', 'Web']" source="https://github.com/CatSandwich/Website">
      <em>The website you're on, built ground-up using Vue.js.</em>
      <p>
        This website was a chance for me to practice my design and css skills. I've worked with Vue.js professionally,
        but I always had a designer available to help me there. Through this project, I was able to see what I could do
        (and learn) on my own.
      </p>
    </project>

  </div>
</template>

<script>

//import Category from '@/components/Category.vue'
import Project from '@/components/Project.vue'
import Snippet from '@/components/Snippet.vue'

export default {
  components: {
    //Category,
    Project,
    Snippet
  }
}

</script>

