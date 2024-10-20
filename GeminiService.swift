import Foundation

class GeminiService {
    static let shared = GeminiService()
    private let apiKey = "AIzaSyB581GFNZTs2ae1D9smOO_OzaYuSh_2Z1c"
    
    private init() {}
    
    func suggestRecipes(ingredients: [String], completion: @escaping ([String]) -> Void) {
        // Burada Gemini AI API'sine istek yapacağız
        // Şimdilik örnek veri döndürüyoruz
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            completion(["Makarna Salatası", "Tavuk Sote", "Mercimek Çorbası"])
        }
    }
    
    func getRecipeDetails(recipe: String, completion: @escaping (String) -> Void) {
        // Burada Gemini AI API'sine istek yapacağız
        // Şimdilik örnek veri döndürüyoruz
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            completion("Bu \(recipe) için detaylı tarif...")
        }
    }
}