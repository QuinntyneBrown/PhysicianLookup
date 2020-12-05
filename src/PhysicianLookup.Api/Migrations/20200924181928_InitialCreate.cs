using System;
using Microsoft.EntityFrameworkCore.Migrations;
using NetTopologySuite.Geometries;

namespace PhysicianLookup.Api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Physicians",
                columns: table => new
                {
                    PhysicianId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Firstname = table.Column<string>(nullable: true),
                    Lastname = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    EmailAddress = table.Column<string>(nullable: true),
                    Website = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Physicians", x => x.PhysicianId);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    RoleId = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.RoleId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<Guid>(nullable: false),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    RefreshToken = table.Column<string>(nullable: true),
                    Salt = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    PhysicianId = table.Column<Guid>(nullable: false),
                    Street = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Province = table.Column<string>(nullable: true),
                    PostalCode = table.Column<string>(nullable: true),
                    Latitude = table.Column<double>(nullable: false),
                    Longitude = table.Column<double>(nullable: false),
                    Location = table.Column<Point>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.PhysicianId);
                    table.ForeignKey(
                        name: "FK_Addresses_Physicians_PhysicianId",
                        column: x => x.PhysicianId,
                        principalTable: "Physicians",
                        principalColumn: "PhysicianId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TrustRelationships",
                columns: table => new
                {
                    TrustRelationshipId = table.Column<Guid>(nullable: false),
                    TrustorId = table.Column<Guid>(nullable: true),
                    TrusteeId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrustRelationships", x => x.TrustRelationshipId);
                    table.ForeignKey(
                        name: "FK_TrustRelationships_Users_TrusteeId",
                        column: x => x.TrusteeId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_TrustRelationships_Users_TrustorId",
                        column: x => x.TrustorId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                columns: table => new
                {
                    UserId = table.Column<Guid>(nullable: false),
                    RoleId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => new { x.RoleId, x.UserId });
                    table.ForeignKey(
                        name: "FK_UserRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRoles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TrustRelationships_TrusteeId",
                table: "TrustRelationships",
                column: "TrusteeId");

            migrationBuilder.CreateIndex(
                name: "IX_TrustRelationships_TrustorId",
                table: "TrustRelationships",
                column: "TrustorId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_UserId",
                table: "UserRoles",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "TrustRelationships");

            migrationBuilder.DropTable(
                name: "UserRoles");

            migrationBuilder.DropTable(
                name: "Physicians");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
