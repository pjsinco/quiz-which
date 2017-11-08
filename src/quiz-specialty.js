export default {

  title: "What's the ideal medical specialty for your personality?",

  questions: [{
    text: "I like working with kids",
    responses: [{
        text: 'Absolutely',
        value: 'Pediatrics'
      },
      {
        text: 'I want to see both kids and adults in my practice',
        value: 'Family Medicine'
      },
      {
        text: 'I just want to be able to partner with my patients, no matter who they are',
        value: 'OMM/NMM'
      },
      {
        text: 'I would prefer working with adults',
        value: 'Internal Medicine'
      }
    ]
    },
    {
      text: "I prefer long-term relationships with patients",
      responses: [{
          text: 'Yes, I want to be closely involved with their lives',
          value: 'Family Medicine'
        },
        {
          text: 'Yes, I want to be involved from birth to young adulthood' ,
          value: 'Pediatrics'
        },
        {
          text: 'Yes, I want to help people manage their pain',
          value: 'OMM/NMM'
        },
        {
          text: 'I would prefer helping patients through short-term crises',
          value: 'Emergency Medicine'
        },
         {
          text: 'I am okay with a short-term relationship, but I would like to see my patients get better',
          value: 'Surgery'
        }

      ]
    },
    {
      text: "I prefer to see tangible results of my efforts quickly",
      responses: [{
          text: 'Yes, I want to see how I directly helped stablize a patient',
          value: 'Emergency Medicine'
        },
        {
          text: 'Yes, I would like to see results very soon after I see a patient',
          value: 'Surgery'
        },
        {
          text: 'Yes, I thrive on immediately seeing positive results in my patients',
          value: 'OMM/NMM'
        },

        {
          text: 'No I understand it might take my patients a lot of time to see their desired results for their health',
          value: 'Internal Medicine'
        },
        {
          text: 'I would like to see immediate results sometimes',
          value: 'OB/GYN'
        }

      ]
    },
    {
      text: "I'm good at making decisions rapidly",
      responses: [{
          text: 'Absolutely, I thrive in a fast-paced enviornment',
          value: 'Emergency Medicine'
        },
        {
          text: 'Yes, but I still want to be very careful',
          value: 'Surgery'
        },
        {
          text: 'I have this skill if I feel the pressure',
          value: 'OB/GYN'
        },
        {
          text: 'I prefer to partner with my patients and discuss options instead',
          value: 'Family Medicine'
        },
         {
          text: 'I would prefer to have the time to use my critical thinking skills',
          value: 'Internal Medicine'
        },
         {
          text: 'I would prefer to work in a more relaxed environment',
          value: 'OMM/NMM'
        }
      ]
    },
    {
      text: "I have good listening skills",
      responses: [{
          text: 'Yes, I want to know my patients well',
          value: 'Family Medicine'
        },
        {
          text: 'Yes, but I rely on my hands to understand my patients best',
          value: 'OMM/NMM'
        },
        {
          text: 'I would prefer just to jump in and take action',
          value: 'Emergency Medicine'
        },
        {
          text: 'Yes, but I rely on my visual observations too',
          value: 'Pediatrics'
        }
      ]
    },
     {
      text: "I want to do everything in medicine",
      responses: [{
          text: 'Yes, this exactly',
          value: 'Family Medicine'
        },
         {
          text: 'Yes, as long as every day is different',
          value: 'Emergency Medicine'
        },
        {
          text: 'Yes, I would even be okay with lots of blood',
          value: 'Surgery'
        },
         {
          text: 'No, I would rather specialize in a certain patient population',
          value: 'OB/GYN'
        },
         {
          text: 'No, I prefer consistency',
          value: 'OMM/NMM'
        }
      ]
    },
    {
      text: "Choose a favorite class",
      responses: [{
          text: 'Physiology',
          value: 'Internal Medicine'
        },
         {
          text: 'Genetics',
          value: 'Pediatrics'
        },
        {
          text: 'Anatomy',
          value: 'Surgery'
        }
      ]
    },
    {
      text: "Women's health is extremely important to me",
      responses: [{
          text: 'Yes, I would be an advocate for them',
          value: 'OB/GYN'
        },
         {
          text: 'Yes, but I want to make sure everyone is healthy',
          value: 'Internal Medicine'
        },
        {
          text: 'Yes, but I would not want to focus on a single patient population',
          value: 'Family Medicine'
        }
      ]
    },
    {
      text: "I'm good at spotting subtle details",
      responses: [{
          text: 'Yes, I can detect when something is slightly off',
          value: 'Pediatrics'
        },
         {
          text: 'Yes, I am very good at looking at complicated issues critically',
          value: 'Internal Medicine'
        },
        {
          text: 'I would say I am more of a big picture type of person',
          value: 'Family Medicine'
        },
        {
          text: 'My mind moves way too fast to see all the small things',
          value: 'Emergency Medicine'
        },
         {
          text: 'I like working with the details so I can see how they affect the big picture',
          value: 'OB/GYN'
        }
      ]
    },
    {
      text: "The following describes you:",
      responses: [{
          text: 'I try to make everyone feel welcome',
          value: 'Pediatrics'
        },
         {
          text: 'I like people, but I also need my quiet time',
          value: 'Internal Medicine'
        },
        {
          text: 'I have a very bold personality',
          value: 'Surgery'
        },
        {
          text: 'I am always up to meet new people',
          value: 'Emergency Medicine'
        },
         {
          text: 'I would consider myself more friendly than extroverted',
          value: 'OB/GYN'
        }
      ]
    },

    {
      text: "Working with my hands is very important",
      responses: [{
          text: 'Yes, I am very tune with my sense of touch',
          value: 'OMM/NMM'
        },
        {
          text: 'Yes, I am very good with working with tools',
          value: 'Surgery'
        },
        {
          text: 'I would like it to be a part of my practice',
          value: 'OB/GYN'
        },
        {
          text: 'I am not interested in that really',
          value: 'Internal Medicine'
        },
        {
          text: 'I would like to work with my hands on occasion',
          value: 'Pediatrics'
        }
      ]
    },
  ]
};
