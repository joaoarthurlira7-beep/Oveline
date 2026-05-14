import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import ProfileTabs from "./ProfileTabs";

const prisma = new PrismaClient();

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Buscar dados do usuário no banco
  const userEmail = session.user.email;
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: {
      orders: {
        include: {
          items: true,
        },
        orderBy: { createdAt: 'desc' }
      },
      addresses: true,
      wishlist: true,
    }
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header do Perfil */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#2A0033] text-white rounded-full flex items-center justify-center text-3xl font-comfortaa shadow-lg">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-comfortaa">Olá, {user.name}</h1>
              <p className="text-gray-500 mt-1">{user.email}</p>
            </div>
          </div>
          <div>
            <a href="/api/auth/signout" className="px-6 py-2.5 bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium rounded-lg transition-colors">
              Sair da Conta
            </a>
          </div>
        </div>

        {/* Client Component com as Abas Interativas */}
        <ProfileTabs user={user} />
        
      </div>
    </div>
  );
}
