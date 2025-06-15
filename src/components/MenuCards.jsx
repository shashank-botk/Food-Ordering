

const MenuCards = () => {
  const menuItems = [
    {
      category: 'Breakfast',
      items: [
        {
          name: 'Dosa',
          description:
            'A crispy, fermented rice and lentil pancake, usually served with sambar and coconut chutney.',
        },
        {
          name: 'Dosa',
          description:
            'A crispy, fermented rice and lentil pancake, usually served with sambar and coconut chutney.',
        },
        {
          name: 'Idli',
          description:
            'Soft and fluffy steamed rice cakes, served with sambar and chutney.',
        },
        {
          name: 'Poha',
          description:
            'A light and flavorful flattened rice dish sautéed with onions, turmeric, and peanuts.',
        },
        {
          name: 'Dosa',
          description:
            'A crispy, fermented rice and lentil pancake, usually served with sambar and coconut chutney.',
        },
        {
          name: 'Idli',
          description:
            'Soft and fluffy steamed rice cakes, served with sambar and chutney.',
        },
        {
          name: 'Poha',
          description:
            'A light and flavorful flattened rice dish sautéed with onions, turmeric, and peanuts.',
        },
      ],
    },
    {
      category: 'Soup',
      items: [
        {
          name: 'Tomato Soup',
          description:
            'A rich and tangy soup made with fresh tomatoes, blended with herbs and spices.',
        },
        {
          name: 'Sweet Corn Soup',
          description:
            'A creamy soup with sweet corn kernels, flavored with mild spices and garnished with spring onions.',
        },
        {
          name: 'Hot and Sour Soup',
          description:
            'A flavorful broth with vegetables and spices, offering a balance of heat and sourness.',
        },
        {
          name: 'Tomato Soup',
          description:
            'A rich and tangy soup made with fresh tomatoes, blended with herbs and spices.',
        },
        {
          name: 'Sweet Corn Soup',
          description:
            'A creamy soup with sweet corn kernels, flavored with mild spices and garnished with spring onions.',
        },
        {
          name: 'Hot and Sour Soup',
          description:
            'A flavorful broth with vegetables and spices, offering a balance of heat and sourness.',
        },
      ],
    },
    {
      category: 'Salad',
      items: [
        {
          name: 'Greek Salad',
          description:
            'A refreshing mix of cucumbers, tomatoes, onions, feta cheese, and olives, dressed in olive oil.',
        },
        {
          name: 'Caesar Salad',
          description:
            'A classic salad made with romaine lettuce, croutons, parmesan cheese, and creamy Caesar dressing.',
        },
        {
          name: 'Sprout Salad',
          description:
            'A healthy and nutritious mix of fresh sprouts, tomatoes, onions, and a light lemon dressing.',
        },
        {
          name: 'Greek Salad',
          description:
            'A refreshing mix of cucumbers, tomatoes, onions, feta cheese, and olives, dressed in olive oil.',
        },
        {
          name: 'Caesar Salad',
          description:
            'A classic salad made with romaine lettuce, croutons, parmesan cheese, and creamy Caesar dressing.',
        },
        {
          name: 'Sprout Salad',
          description:
            'A healthy and nutritious mix of fresh sprouts, tomatoes, onions, and a light lemon dressing.',
        },
      ],
    },
  ];


  return (
    < >
    <div className="flex flex-col items-center justify-center gap-6 p-8 mt-20">

      {/* Render Categories & Assign Refs */}
      {menuItems.map((val, index) => (
        <div
          key={index}
          className="flex w-3/4 flex-col items-center justify-center gap-4"
        >
          <h2 className="self-start text-2xl font-bold">{val.category}</h2>
          <ul className="flex w-full flex-wrap gap-4">
            {val.items.map((item, itemIndex) => (
              <li
              key={itemIndex}
              className="flex h-[18vh] w-[22vw] flex-col items-center justify-center rounded-lg border p-6 shadow-md backdrop-blur-md transition-all duration-500 ease-in-out hover:scale-102 hover:bg-zinc-600 hover:text-stone-50"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-center text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
            </>
  );
};

export default MenuCards;
