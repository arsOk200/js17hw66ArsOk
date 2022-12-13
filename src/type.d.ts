export interface Meal {
  TimeOfReceipt: string;
  description: string;
  kcal: string;
  id: string
}

export type ApiMeal = Omit<Meal, 'id'>

export interface ApiMealsList {
  [id: string]: ApiMeal;
}


export interface MealMutation {
  TimeOfReceipt: string;
  description: string;
  kcal: string;
}