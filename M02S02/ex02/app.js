// jQuerys  DOMContentLoaded:
// $(document).ready(function())
// ^ varianta asta e veche si deprecated
// use this instead:

// data model / data set / application state
const person = {};
// arrow functions -> no hoisting
const renderSkillsUl = (skillName) => {
  const className = 'skillsUl';
  let $skillsUl = $('.' + className);

  if ($skillsUl.length <= 0) {
    $skillsUl = $('<ul>', {
      class: className,
    });
  }

  const $skillLi = $('<li>').append(
    $('<span>', {
      text: skillName,
      class: 'skillLabel',
    }),
  );
  const $skillInput = $('<input>', {
    type: 'hidden',
    value: skillName,
    name: `skill_${skillName.replaceAll(' ', '')}`,
  });
  $skillLi.append($skillInput);
  // jq variation
  $('<button>', {
    text: '-',
    title: 'Remove skill',
    type: 'button',
    class: 'removeSkillButton',
  }).appendTo($skillLi);

  // jq vartion
  $skillLi
    .append(
      $('<button>', {
        title: 'Edit skill',
        text: 'Edit',
        type: 'button',
        class: 'editSkillButton',
      }),
    )
    .append(
      $('<button>', {
        title: 'Save skill',
        text: 'Save',
        type: 'button',
        class: 'saveSkillButton',
      }).hide(),
    )
    .append(
      $('<button>', {
        title: 'Cancel edit',
        text: 'Cancel',
        type: 'button',
        class: 'cancelEditSkillButton',
      }).hide(),
    );

  $skillsUl.append($skillLi);

  return $skillsUl;
};

const renderPetUl = (petName) => {
  const listClass = 'petUl';
  let ul = document.querySelector(`.${listClass}`);

  if (ul === null) {
    ul = document.createElement('ul');
    ul.classList.add(listClass);
  }

  const petLi = document.createElement('li');
  petLi.innerText = petName;
  const petInput = document.createElement('input');
  petInput.type = 'hidden';
  petInput.name = `pet_${petName.replaceAll(' ', '')}`;
  petInput.value = petName;
  petLi.append(petInput);
  const removePetButton = document.createElement('button');
  removePetButton.innerText = '-';
  removePetButton.title = 'Remove pet';
  removePetButton.type = 'button';
  removePetButton.className = 'removePetButton';
  petLi.append(removePetButton);

  ul.append(petLi);

  return ul;
};

$(function () {
  // form submission step
  const $form = $('#personForm');

  //  DOM version, mutata inainte de form submit handler
  // array like object
  const petFieldset = $form[0].querySelector('fieldset:nth-child(3)');
  const petInput = document.createElement('input');
  petInput.placeholder = 'Pet';
  petInput.type = 'text';
  petInput.name = 'petInput';
  petFieldset.append(petInput);

  const petInputButton = document.createElement('button');
  petInputButton.innerText = 'Add pet';
  petInputButton.title = 'Add pet';
  petInputButton.type = 'button';
  petInputButton.addEventListener('click', (event) => {
    const petInputButton = event.currentTarget;
    const petInput = petInputButton.previousElementSibling;
    const petName = petInput.value;

    // refactorizam event listener ca sa poata fi input
    // si pe input + enter
    petInputButton.after(createPetPreview(petName));
  });
  petInput.value == '';
});
petFieldset.append(petInputButton);

$form
  .on('submit', function (event) {
    event.preventDefault();
    const petInput = this.petInput;
    const petName = petInput.value;

    if (petName.trim().length > 0) {
      const petInputButton = petInput.nextElementSibling;
      petInputButton.after(createPetPreview(petName));

      petInput.value = '';

      return;
    }

    // this -> pointer to the form
    // this.name ->pointer to the input
    person.name = this.name.value;
    person.surname = this.surname.value;
    person.age = this.age.value;
    person.skills = person.skills || [];
    person.pets = person.pets || [];

    // loop through optional data
    const formData = new FormData(this);
    for (const entry of formData) {
      // array destructure
      const [inputName, inpuutValue] = entry;
      // const inputName = entry 0[];
      // const inputValue = entry 1 [];
      if (inputName.startsWith('skill_')) {
        person.skills.push(inputValue);
      }

      if (inputName.startsWith('pet_')) {
        person.pets.push(inputValue);
      }
    }

    this.reset();
    $('.skillsUl').remove();
    $('.personDisplay').remove();

    // wrap form in jquery
    // render returneaza obiect jq si este plasat in DOM
    $(this).after(render(person));
  })
  .on('click', '.removeSkillButton', function () {
    // this->pointer catre buton
    $(this).parent().remove();
  })
  .on('click', '.editSkillButton', function () {
    const $editSkillButton = $(this);

    $editSkillButton.siblings('.removeSkillButton').hide();
    $editSkillButton.siblings('.skillLabel').hide();
    $editSkillButton.siblings('input[name^="skill_"]').attr('type', 'text');
    $editSkillButton.hide();
    $editSkillButton.siblings('.cancelEditSkillButton').show();
    $editSkillButton.siblings('.saveSkillButton').show();
  })
  .on('click', '.cancelEditSkillButton', function () {
    const $cancelEditSkillButton = $(this);

    $cancelEditSkillButton.siblings('.editSkillButton').show();
    $cancelEditSkillButton.siblings('.skillLabel').show();
    $cancelEditSkillButton
      .siblings('input[name^="skill_"]')
      .attr('type', 'hidden');
    $cancelEditSkillButton.hide();
    $cancelEditSkillButton.siblings('.saveSkillButton').hide();
  })
  .on('click', '.saveSkillButton', (event) => {
    const $saveSkillButton = $(event.target);
    const $skillLabel = $saveSkillButton.siblings('.skillLabel').show();
    const $skillInput = $saveSkillButton
      .siblings('input[name^="skill_"]')
      .attr('type', 'hidden');

    const skillName = $skillInput.val();

    $skillLabel.text(skillName);
    $skillInput.attr('name', `skill_${skillName.replaceAll(' ', '')}`);

    $saveSkillButton.siblings('.editSkillButton, .removeSkillButton').show();
    $saveSkillButton.hide();
    $saveSkillButton.siblings('.cancelEditSkillButton').hide();
  });

// event delegation, DOM style
// acelasi lucru, dar pt comparatie cu API-ul jquery
$form[0].addEventListener('click', (event) => {
  // in arrow functions nu avem acces la acel obiect this
  // in arrow functions avem this-ul conectat de this-ul din
  // contextul de afara
  const button = event.target;
  // diferenta dintre event.target si .currentTarget
  // este ca currentTarget este elementul pe care STA (form)
  // event handlerul, iar target, este elementul de pe care
  // evenimentul a plecat
  if (
    button.nodeName !== 'BUTTON' ||
    !button.classList.contains('removePEtButton')
  ) {
    // early return
    // daca tipul elementului masurat de nodeName nu est button
    // si daca nu are clasa removePetButton
    return;
  }

  // suntem pe butonul de remove pet:
  // nde ducem pe parinte, DOM style, si eliminam parintele
  button.parentElement.remove();
});

// create skills input step
// form.descendentii-directi.al-doilea-fieldset
const addSkillText = 'Add skill';
$form
  .children()
  .eq(1) // 0 based
  .append(
    $('<input>', {
      type: 'text',
      placeholder: 'Skill',
      name: 'skillInput',
    }),
  )
  .append(
    $('<button>', {
      type: 'button',
      title: addSkillText,
      class: 'addSkillButton',
      text: addSkillText,
    }).on('click', function () {
      // in function functions, this -> button.addSkillButton
      const $button = $(this);
      const $skillInput = $button.prev();
      const skillName = $skillInput.val();

      if (skillName.length <= 0) {
        return;
      }

      const $ul = renderSkillsUl(skillName);
      $button.after($ul);

      $skillInput.val('');
    }),
  );

function createPetPreview(petName) {
  if (petName.length <= 0) {
    return;
  }
  return renderPetUl(petName);
}

function render(person) {
  // all in memory
  const $personDisplay = $('<div>', {
    class: 'personDisplay',
  })
    .append(renderPerson(person))
    .append(renderPersonSkills(person))
    .append(renderPersonPets(person));

  return $personDisplay;
}

function renderPerson(person) {
  // destructurare
  const { name, age, surname } = person;
  // const name = person.name;
  // const age = person.age;
  // const surname = person.surname;

  return $('<p>', {
    text: `${name} ${surname}: ${age}`,
  });
}

function renderPersonSkills(person) {
  const { skills, ...restOfPerson } = person;
  const { name } = restOfPerson;

  if (skills.length <= 0) {
    return '';
  }

  let message = '';
  skills.forEach(function (skill, index, skills) {
    let punctuation = ', ';
    if (index === skills.length - 1) {
      punctuation = '.';
    }

    if (index === skills.length - 2) {
      punctuation = ' and ';
    }

    message += `${skill}${punctuation}`;
  });

  return $('<p>', {
    text: `${name}'s skills are: ${message}`,
  });
}

function renderPersonPets(person) {
  const { pets, ...restOfPerson } = person;

  if (pets.length <= 0) {
    return '';
  }

  return $('<p>', {
    text: pets.toString(),
  });
}
