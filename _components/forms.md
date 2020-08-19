---
layout: component
title: Forms
intro: |-
  Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore?
sections:
  - title: Basic Input
    type: examples
    description: |-
      Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore? Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore?
    examples:
      - component: theme/patterns/forms/basic.liquid
  - title: Notched Input
    type: examples
    description: |-
      Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore? Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore?
    examples:
      - component: theme/patterns/forms/notched.liquid
        id: example-notched
  - title: Checkbox
    type: examples
    description: |-
      Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore? Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore?
    examples:
      - component: theme/patterns/forms/checkbox.liquid
        class: secondary
  - title: Checkbox Group
    type: examples
    description: |-
      Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore? Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore?
    startCode: |-
      <fieldset class="checkbox-group">
        <legend>Checkbox Group</legend>
        <p class="checkbox-group-question">Lorem ipsum sit dolore tip amet est at vel sequi?</p>
    endCode: </fieldset>
    examples:
      - component: theme/patterns/forms/checkbox.liquid
        class: secondary
        id: checkbox-example-1
        text: Checkbox 1
      - component: theme/patterns/forms/checkbox.liquid
        class: secondary
        id: checkbox-example-2
        text: Checkbox 2
  - title: Radio Button
    type: examples
    description: |-
      Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore? Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore?
    examples:
      - component: theme/patterns/forms/radio.liquid
        class: secondary
        id: radio-example-single
        name: radio-example-single
        text: Radio
  - title: Radio Group
    type: examples
    description: |-
      Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore? Tempora ipsum debitis vitae repudiandae! Dolore provident molestias facere beatae pariatur est at vel sequi? Sint, labore at? Hic reiciendis ipsa labore?
    startCode: |-
      <fieldset class="radio-group">
        <legend>Radio Group</legend>
        <p class="radio-group-question">Lorem ipsum sit dolore tip amet est at vel sequi?</p>
    endCode: </fieldset>
    examples:
      - component: theme/patterns/forms/radio.liquid
        class: secondary
        id: radio-example-1
        text: Radio 1
        checked: true
      - component: theme/patterns/forms/radio.liquid
        class: secondary
        id: radio-example-2
        text: Radio 2
---