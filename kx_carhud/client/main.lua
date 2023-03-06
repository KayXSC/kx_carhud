CreateThread(function()
    while (true) do 
        local playerPed = PlayerPedId();
        local isPedInVehicle = IsPedInAnyVehicle(playerPed);
        SendNUIMessage({
            type = 'update',
            velocity = isPedInVehicle and GetEntitySpeed(GetVehiclePedIsIn(playerPed, false)) * 3.6 or 0,
            fuel = isPedInVehicle and GetVehicleFuelLevel(GetVehiclePedIsIn(playerPed, false)) or 0,
            isOnVehicle = isPedInVehicle and GetEntitySpeed(GetVehiclePedIsIn(playerPed, false)) * 3.6 > 0
        })
        Wait(isPedInVehicle and 150 or 1000)
    end
end)