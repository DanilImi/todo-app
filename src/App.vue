<template>
  <header>
    <h1 :class="$style.title">to do list</h1>
  </header>
  <main>
    <div :class="$style.accordion">
      <div :class="$style.accordionTask">
        <div :class="$style.accHeader">
          <div :class="$style.acc">
            <div :class="$style.wrapperCheck">
              <input type="checkbox" id="scales" name="scales" />
              <span>Task 1</span>
            </div>
            <button><div :class="$style.btn"></div></button>
          </div>
        </div>
        <div :class="$style.accordionItem">
          <div :class="$style.acc">
            <!--accordionMinTask-->
            <div :class="$style.wrapperCheck">
              <input type="checkbox" id="scales" name="scales" />
              <span>Task 1</span>
            </div>
            <button><div :class="$style.btn"></div></button>
          </div>
        </div>
        <div :class="$style.inputTask">
          <button>+</button>
          <input
            type="text"
            id="AddTask"
            name="AddTask"
            placeholder="Add a new task"
          />
        </div>
      </div>
      <div :class="$style.accordionTask">
        <div :class="$style.accHeader">
          <div :class="$style.acc">
            <div :class="$style.wrapperCheck">
              <input type="checkbox" id="scales" name="scales" />
              <span>Task 1</span>
            </div>
            <button><div :class="$style.btn"></div></button>
          </div>
        </div>
        <div :class="$style.accordionItem">
          <div :class="$style.acc">
            <!--accordionMinTask-->
            <div :class="$style.wrapperCheck">
              <input type="checkbox" id="scales" name="scales" />
              <span>Task 1</span>
            </div>
            <button><div :class="$style.btn"></div></button>
          </div>
        </div>
        <div :class="$style.inputTask">
          <button>+</button>
          <input
            type="text"
            id="AddTask"
            name="AddTask"
            placeholder="Add a new task"
          />
        </div>
      </div>
    </div>
    <div :class="$style.InputFooter">
      <input
        type="text"
        id="AddTask"
        name="AddTask"
        placeholder="Add a new task"
      />
    </div>
  </main>
  <footer>
    <span>1/3 left</span>
    <div>
      <div>
        <input type="radio" id="radio-1" name="Filter" value="All" />
        <label for="radio-1">All</label>
      </div>
      <div>
        <input type="radio" id="radio-2" name="Filter" value="Active" />
        <label for="radio-2">Active</label>
      </div>
      <div>
        <input type="radio" id="radio-3" name="Filter" value="Completed" />
        <label for="radio-3">Completed</label>
      </div>
    </div>
  </footer>
</template>
<script></script>
<style module lang="scss">
@import "./assets/header.module.scss";
@import "./assets/main.module.scss";
@import "./assets/footer.module.scss";
</style>
