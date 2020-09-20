import React from 'react';
import { Field } from 'redux-form';
import { FormControl, FormGroup, FormLabel} from "react-bootstrap";
import RenderForm from "./RenderForm";

const formData = {
  /* Interest Form */
  interest: {
    type: 'input',
    label: 'Common Interest'
  },
  /* Player Form */
  name: {
    type: 'input',
    label: 'Name'
  },
  association: {
    type: 'input',
    label: 'Time Associated to Interest'
  },
  /* Physical Form */
  age: {
    type: 'select',
    label: 'Age',
    options: [
      '0-10',
      '11-20',
      '21-30',
      '31-40',
      '41-50',
      '51-60',
      '61-70',
      '71-80',
      '81-90',
      '91-100'
    ],
    values: [
      400,
      40,
      360,
      80,
      320,
      120,
      280,
      160,
      240,
      200
    ]
  },
  height: {
    type: 'select',
    label: 'Height',
    options: [
      'Short',
      'Average',
      'Tall'
    ],
    values: [
      16,
      32,
      48
    ]
  },
  gender: {
    type: 'select',
    label: 'Gender',
    options: [
      'Male',
      'Female',
      'Non-binary'
    ],
    value: [
      2,
      1,
      0
    ]
  },
  vocation: {
    type: 'select',
    label: 'Vocation',
    options: [
      'Numbers',
      'Words',
      'Ideas',
      'Images',
      'People'
    ],
    values: [
      27,
      36,
      18,
      9,
      0
    ]
  },
  diet: {
    type: 'select',
    label: 'Diet',
    options: [
      'Carnivore',
      'Vegetarian',
      'Pescatarian',
      'Vegan'
    ],
    values: [
      'carnivore',
      'vegetarian',
      'pescatarian',
      'vegan'
    ],

  },
  /* Personal Form */
  time: {
    type: 'select',
    label: 'Time',
    options: [
      'Morning',
      'Evening'
    ],
    values: [
      18,
      45
    ]
  },
  personality: {
    type: 'select',
    label: 'Personality',
    options: [
      'Introvert',
      'Extrovert'
    ],
    values: [
      60,
      31
    ]
  },
  hair: {
    type: 'select',
    label: 'Hair',
    options: [
      'Curly',
      'Straight',
      'Wavy'
    ],
    values: [
      10,
      18,
      25
    ]
  },
  /* Risk Form */
  money: {
    type: 'select',
    label: 'Money',
    options: [
      'Miserly',
      'Spend-thrift',
      'Saver',
      'Does not Apply'
    ],
    values: [
      0,
      2,
      3,
      1
    ]
  },
  food: {
    type: 'select',
    label: 'Food',
    options: [
      'I will try anything',
      'A foodie',
      'A picky eater',
      'See-food Dieter'
    ],
    values: [
      45,
      135,
      270,
      45
    ]
  },
  /* Nature Form */
  nature: {
    type: 'select',
    label: 'Nature',
    options: [
      'Video Gamer',
      'Happy on the porch',
      'Nature Lover',
      'Climate activist'
    ],
    values: [
      1,
      2,
      3,
      4
    ]
  },
  media: {
    type: 'select',
    label: 'Media',
    options: [
      'What is social media',
      'Lurker',
      'Regular poster',
      'Influencer'
    ],
    values: [
      1,
      2,
      3,
      4
    ]
  },
  /* Culture Form */
  religion: {
    type: 'select',
    label: 'Religion',
    options: [
      'Practitioner',
      'Agnostic',
      'God-fearing',
      'Wiccin',
      'Undecided'
    ],
    values: [
      1,
      2,
      3,
      4,
      5
    ]
  },
  culture: {
    type: 'select',
    label: 'Culture',
    options: [
      'People Magazine reader',
      'Netflix binger',
      'Museum attendee',
      'Cultural practitioner'
    ],
    values: [
      1,
      2,
      3,
      4
    ]
  },
  /* Visual */
  hue: {
    type: 'select',
    label: 'Hue',
    options: [
      'Chartreuse',
      'Vermilion',
      'Cobalt',
      'Teal',
      'Kelly Green',
      'Aubergine'
    ],
    values: [
      'chartreuse',
      'vermilion',
      'cobalt',
      'teal',
      'kellyGreen',
      'aubergine',
    ]
  }
}

export const ResponseForm = (props) => {
  const handleForm = (formValues) => {
    props.handleForm('SET_INTEREST', formValues)
  }

  const renderInputs = ({input, label, type, options, values }) => {
    if (type === 'select') {
      const optionTags = options.map((option, i) => {
        return <option key={option} value={values[i]}>{option}</option>
      })
      return (
        <div key={`${label}-options`}>
          <FormLabel className='form__label'>{label}</FormLabel>
          <FormControl className='form__control' as={type} defaultValue={'DEFAULT'}>
            <option className='form__option' value='DEFAULT'>Choose...</option>
            {optionTags}
          </FormControl>
        </div>
      )
    }
    return (
      <div key={label}>
        <FormLabel className='form__label' >{label}</FormLabel>
        <FormControl className='form__control' placeholder={label} {...input} required />
      </div>
    )
  }

  const createFields = () => {
    return props.formFields.map(field => {
      return (
        <Field
          key={field}
          name={field}
          component={renderInputs}
          label={formData[field].label}
          type={formData[field].type}
          options={formData[field].options ? formData[field].options : false}
          values={formData[field].values ? formData[field].values : false}
        />
      )
    })
  }

  return (
    <FormGroup className='form__group'>
      <RenderForm handleForm={handleForm}>
        {createFields()}
      </RenderForm>
    </FormGroup>
  )
}