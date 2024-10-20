import SwiftUI

struct ContentView: View {
    @State private var ingredients: [String] = []
    @State private var recipes: [String] = []
    @State private var selectedRecipe: String?
    @State private var recipeDetails: String?
    @State private var isLoading = false

    var body: some View {
        NavigationView {
            VStack {
                IngredientInputView(ingredients: $ingredients, onSubmit: suggestRecipes)
                
                if isLoading {
                    ProgressView("Tarifler aranıyor...")
                } else if !recipes.isEmpty {
                    RecipeListView(recipes: recipes, onSelectRecipe: getRecipeDetails)
                }
                
                if let selectedRecipe = selectedRecipe, let recipeDetails = recipeDetails {
                    RecipeDetailsView(recipe: selectedRecipe, details: recipeDetails)
                }
            }
            .navigationTitle("Yemek Tarifi Önerileri")
        }
    }
    
    func suggestRecipes() {
        isLoading = true
        // Burada Gemini AI API'sini çağıracağız
        // Şimdilik örnek veriler kullanıyoruz
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            self.recipes = ["Makarna Salatası", "Tavuk Sote", "Mercimek Çorbası"]
            self.isLoading = false
        }
    }
    
    func getRecipeDetails(for recipe: String) {
        isLoading = true
        selectedRecipe = recipe
        // Burada Gemini AI API'sini çağıracağız
        // Şimdilik örnek veriler kullanıyoruz
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            self.recipeDetails = "Bu \(recipe) için detaylı tarif..."
            self.isLoading = false
        }
    }
}