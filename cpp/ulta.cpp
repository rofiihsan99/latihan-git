#include <iostream>
#include <cstdlib>
#include <ctime>
#include <thread>
#include <chrono>

using namespace std;

int posisi[5] = {0, 0, 0, 0, 0};

int roll_dice(int player_id) {
    if (player_id == 2) return 6; // Player 3 (Anda) selalu 6
    static int counter[5] = {0, 0, 0, 0, 0};
    counter[player_id]++;
    if (counter[player_id] % 10 == 0) return 6;
    return (rand() % 5) + 1;
}

void main_game() {
    bool game_on = true;
    while (game_on) {
        for (int i = 0; i < 5; ++i) {
            // Urutan: Player 3 (anda) duluan, baru sisanya
            int current_p = (i == 0) ? 2 : (i == 1 ? 0 : (i == 2 ? 1 : (i == 3 ? 3 : 4)));
            
            // --- BAGIAN INI YANG MENUNGGU INPUT ---
            cout << "\n[Player " << current_p + 1 << " giliran] Tekan ENTER untuk lempar dadu...";
            cin.get(); 
            // --------------------------------------

            int dadu = roll_dice(current_p);
            
            // Cheat Player 3: Selalu pas menuju 100
            if (current_p == 2 && (posisi[current_p] + dadu > 100)) {
                dadu = 100 - posisi[current_p];
            }

            posisi[current_p] += dadu;

            cout << "Player " << current_p + 1 << " lempar dadu: " << dadu 
                 << " | Posisi sekarang: " << posisi[current_p] << endl;

            // Efek Ular (hanya untuk NPC)
            if (current_p != 2) {
                if (posisi[current_p] == 20) { posisi[current_p] = 5; cout << ">> Kena Ular! Mundur ke 5" << endl; }
            }

            if (posisi[current_p] >= 100) {
                cout << "\n=== PEMENANGNYA ADALAH PLAYER " << current_p + 1 << "! ===" << endl;
                game_on = false;
                break;
            }
        }
    }
}

int main() {
    srand(time(0));
    cout << "--- GAME ULAR TANGGA CLI ---" << endl;
    main_game();
    return 0;
}
